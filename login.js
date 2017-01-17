//login page
$("#submit_btn").click(function(){
    var user=$("#username").val();
    var pass=$("#password").val();
    $("#submit_btn").html('<i class="fa fa-circle-o-notch fa-spin fa-lg fa-fw"></i> Logging in');
    $.ajax({
        url: "/ui/login",
        type: "POST",
        content: "json",
        data: JSON.stringify({username: user, password: pass}),
        contentType: "application/json",
        success: function(data){
			window.location.href="/articles";
        },
        error: function(xhr, status, errorThrown){
			alert(xhr.responseText);
			$("#submit_btn").html('Login');
        }
    });
   });