
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

   //Make a request
   var username=document.getElementById('username').value;
var password=document.getElementById('password').value;
console.log(username);
console.log(password);
   request.open('POST','http://gunu77.imad.hasura-app.io/login',true);
   request.setRequestHeader('Content-Type','application/json');
   request.send(JSON.stringify({username: username,password: password}));
};


   //signup
   
 window.onload = function () {

   var register=document.getElementById('register_btn');
   
 register.onclick =function() {
    
        // Create a request object
        var request = new XMLHttpRequest();
        
        // Capture the response and store it in a variable
        request.onreadystatechange = function () {
          if (request.readyState === XMLHttpRequest.DONE) {
              // Take some action
              if (request.status === 200) {
                  alert('User created successfully');
                  register.value = 'Registered!';
              } else {
                  alert('Could not register the user');
                  register.value = 'Register';
              }
          
        }
        };
        // Make the request
        var username = document.getElementById('user').value;
        var password = document.getElementById('pass').value;
        console.log(username);
        console.log(password);
        request.open('POST', 'http://gunu77.imad.hasura-app.io/create-user', true);
        request.setRequestHeader('Content-Type', 'application/json');
        request.send(JSON.stringify({username:username, password: password}));  
        }; 
};
