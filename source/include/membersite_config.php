<?PHP
require_once("./include/fg_membersite.php");

$fgmembersite = new FGMembersite();

//Provide your site name here
$fgmembersite->SetWebsiteName('http://www.gunu77.imad.hasura-app.io');

//Provide the email address where you want to get notifications
$fgmembersite->SetAdminEmail('singhgundeep5620@gmail.com');

//Provide your database login details here:
//hostname, user name, password, database name and table name
//note that the script will create the table (for example, fgusers in this case)
//by itself on submitting register.php for the first time
$fgmembersite->InitDB(/*hostname*/'db.imad.hasura-app.io',
                      /*username*/'gunu77',
                      /*password*/'db-gunu77-64332',
                      /*database name*/'gunu77',
                      /*table name*/'fgusers3');

//For better security. Get a random string from this link: http://tinyurl.com/randstr
// and put it here
$fgmembersite->SetRandomKey('qSRcVS6DrTzrPvr');

?>