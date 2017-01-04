var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;
var crypto= require('crypto');
var bodyParser= require('body-parser');

var config={
    user:'gunu77',
    database:'gunu77',
    host:'db.imad.hasura-app.io',
    port:'5432',
    password:process.env.DB_PASSWORD
};

var app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());

var pool=new Pool(config);
app.get('/test-db', function (req, res) {
  pool.query('SELECT * FROM test', function (err, result) {
      if(err){
          res.status(500).send(err.toString());
      } else{
          res.send(JSON.stringify(result.rows));
          
      }
  });
});


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/', 'gs.html'));
});

function hash(input, salt) {
    var hashed=crypto.pbkdf2Sync(input, salt, 10000, 512, 'sha512');
    return['pbkdf2','10000',salt, hashed.toString('hex')].join('$');
    
}

app.get('/hash/:input', function (req, res) {
   var hashedString= hash(req.params.input, 'this-is-some-random-string');
   res.send(hashedString);
});

app.post('/create-user', function (req, res) {
    var username=req.body.username;
    var password=req.body.password;
    var salt=crypto.randomBytes(128).toString('hex');
    var dbString=hash(password,salt);
    pool.query('INSERT INTO "user" (username,password) VALUES($1, $2)',[username, dbString], function(err,result) {
     if(err){
            res.status(500).send(err.toString());
        }else{
            res.send('User successfully created: ' + username);
        }   
    });
});    

app.post('/login',function (req, res) {
    var username=req.body.username;
    var password=req.body.password;
    
    pool.query('SELECT * FROM "user" WHERE username = $1',[username], function(err,result) {
     if(err){
            res.status(500).send(err.toString());
        }else{
            if(result.rows.length===0) {
                res.send(403).send('username/password is invalid');
            } else{
                var dbString= result.rows[0].password;
                var salt=dbString.split('$')[2];
                var hashedPassword=hash(password, salt);
                if(hashedPassword === dbString) {
                res.send('Credentials Correct');
                } else{
                  res.send(403).send('username/password is invalid');  
                }
            }
            
        }   
    });
    
});

var pool=new Pool(config);
app.get('/article-db',function(req,res){
    pool.query('SELECT * FROM article',function(err,result) {
        if(err){
            res.status(500).send(err.toString());
        }else{
            res.send(JSON.stringify(result.rows));
        }
    });
});



app.get('/about.html', function (req, res) {
  res.sendFile(path.join(__dirname, '/', 'about.html'));
});



app.get('/meetthefamily.html', function (req, res) {
  res.sendFile(path.join(__dirname, '/', 'meetthefamily.html'));
});

app.get('/creatures.html', function (req, res) {
  res.sendFile(path.join(__dirname, '/', 'creatures.html'));
});

app.get('/exorcism1.html', function (req, res) {
  res.sendFile(path.join(__dirname, '/', 'exorcism1.html'));
});



app.get('/exorcism2.html', function (req, res) {
  res.sendFile(path.join(__dirname, '/', 'exorcism2.html'));
});

app.get('/episodes.html', function (req, res) {
  res.sendFile(path.join(__dirname, '/', 'episodes.html'));
});

app.get('/ui/css/bootstrap.css', function (req, res) { res.sendFile(path.join(__dirname, 'ui', 'bootstrap.css')); });




var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
