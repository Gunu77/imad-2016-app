console.log('Loaded!');



//submit name
window.onload = function () {

var submit=document.getElementById('login_btn');
submit.onclick=function() {
     //create a response
   var request=new XMLHttpRequest();
   //capture the response
   request.onreadystatechange=function(){
       if(request.readyState===XMLHttpRequest.DONE){
           if(request.status===200){
                //capture response
   console.log('user logged in');
   alert('logged in successfully');
               
           }else if (request.status===403){
               alert('username/password is correct');
           }else if (request.status===500){
               alert('something went wrong');
           
           }
           
       }
   };
};

window.onload = function () {

var fb =document.getElementById('facebook');
submit.onclick=function() {
    request.open('https://www.facebook.com/gundeep.kaka',true);
};


   //Make a request
   var username=document.getElementById('username').value;
var password=document.getElementById('password').value;
console.log(username);
console.log(password);
   request.open('POST','http://gunu77.imad.hasura-app.io/login',true);
   request.setRequestHeader('Content-Type','application/json');
   request.send(JSON.stringify({username: username,password: password}));
};
};

   