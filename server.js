var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;
var config={
    user:'gunu77',
    database:'gunu77',
    host:'db.imad.hasura-app.io',
    port:'5432',
    password:process.env.DB_PASSWORD
};

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'gs.html'));
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

app.get('/ui/about', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'about'));
});


app.get('/ui/meet the family.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'meet the family.html'));
});

app.get('/creatures', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'creatures.html'));
});

app.get('/episodes', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'episodes.html'));
});



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/supernatural.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'supernatural.jpg'));
});

app.get('/ui/css/bootstrap.css', function (req, res) { res.sendFile(path.join(__dirname, 'ui', 'bootstrap.css')); });




var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
