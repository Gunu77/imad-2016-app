var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var about={
    title:'About',
    content:`<div class="col-md-5"><p style="font-size:120%; color:lightblue; margin-top:40px;"><b><u>Supernatural is an American fantasy horror television series created by Eric Kripke. It was first broadcast on September 13, 2005, on The WB, and subsequently became part of successor The CW's lineup. Starring Jared Padalecki as Sam Winchester and Jensen Ackles as Dean Winchester, the series follows the two brothers as they hunt demons, ghosts, monsters, and other supernatural beings in the world. The series is produced by Warner Bros. Television, in association with Wonderland Sound and Vision. Along with Kripke, executive producers have been McG, Robert Singer, Phil Sgriccia, Sera Gamble, Jeremy Carver, John Shiban, Ben Edlund and Adam Glass. Former executive producer and director Kim Manners died of lung cancer during production of the fourth season.</u></b></p></div>`
};

function createTemplate (data){
 var title=data.title;
 var content=data.content;
var htmlTemplate=`<html>
<head>
    <meta charset="utf-8">
    ${title}
    <link rel="stylesheet" type="text/css" href="C:\Users\mani\Desktop\portfolio\My project\css/bootstrap.css">
    <link rel="stylesheet" type="text/css" href="C:\Users\mani\Desktop\portfolio\NPTEL/styleabout.css">
</head>
<body>
	<div class="container">
		<div class="row">
			${content}
			<div class="col-md-4"></div>
			<div class="col-md-3"><img src="C:\Users\mani\Desktop\portfolio\NPTEL/aboutlogo1.jpg" style="width:500px;height:250px; margin-top:40px;"></div>
			<br>
			<br>
			<br>
			<br>
			<br>
			<div class="row">
				<div class="col-md-8"><img src="C:\Users\mani\Desktop\portfolio\NPTEL/aboutlogo2.jpg" style="width:450px;height:300px; margin-top:100px;"></div>

				
				<div class="col-md-4"><p style="font-size:120%;color:orange;margin-top:150px;margin-left:70px;"><b><u>The series is filmed in Vancouver, British Columbia and surrounding areas and was in development for nearly ten years, as creator Kripke spent several years unsuccessfully pitching it. The pilot was viewed by an estimated 5.69 million viewers,and the ratings of the first four episodes prompted The WB to pick up the series for a full season. Originally, Kripke planned the series for three seasons but later expanded it to five. The fifth season concluded the series' main storyline,and Kripke departed the series as showrunner.The series has continued on for several more seasons with new showrunners, including Sera Gamble, Jeremy Carver, Robert Singer and Andrew Dabb.The series was renewed for an eleventh season, which premiered on October 7, 2015.With its eleventh season, Supernatural became the longest-running North American fantasy series.The series has been renewed for a twelfth season,which will premiere on October 13, 2016.</u></b></p></div>
		</div>

	</div>
</body>
</html>`;
return htmlTemplate;
}



app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one',function(req,res) {
    res.send(createTemplate(about));
});

app.get('/article-two',function(req,res) {
    res.send('Article two requested and will be served here');
});

app.get('/article-three',function(req,res) {
    res.send('Article three requested and will be served here');
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
