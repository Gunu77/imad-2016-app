console.log('Loaded!');

 //signup
   
window.onload = function () {

   var register=document.getElementById('register_btn');
   
 register.onclick =function() {
    
        // Create a request object
        var request = new XMLHttpRequest();
    	request.onreadystatechange = function(){
    		if(request.readyState === XMLHttpRequest.DONE){
    			if(request.status === 502)
    				{
    					console.log("user created");
    					alert("Creates Account successfully");		
    				}
    			else if(request.status === 403){
    				alert('Something is 403');
    			}
    			else if(request.status === 500){
    				alert('Something is wrong on the server 500');
    			}
    		}
    	}; 
    	
        var username = document.getElementById('usernamein').value;
        var password = document.getElementById('passwordin').value;
        console.log(usernamein);
        console.log(passwordin);
        request.open('POST', 'http://gunu77.imad.hasura-app.io/create-user', true);
        request.setRequestHeader('Content-Type', 'application/json');
        var tosend= {username:username,password:password};
        request.send(JSON.stringify(tosend));
 }; 
};
