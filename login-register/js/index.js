$(document).ready(function(){

    $("#loginBtn").click(function(){
        var data = $('#loginForm').serialize();
        console.log(data);
        $.ajax({
            url: "http://188.166.237.168/api/user/auth",
            method: "POST",
            data: data,
            dataType: 'json',
            success:function(data){
                console.log('sucess : ');
                window.location.href= "/Users/madfo/Desktop/login-register-master/login-register/view/main.html";
            }
          });
      });

      $("#regisSpan").click(function(){
        $("#modal").modal("show");
        //window.location.href= "/Users/madfo/Desktop/login-register-master/login-register/view/register.html";
      });

      $("#regisBtn").click(function(){
        var data = $('#regisForm').serialize();
        $.ajax({
            url: "http://188.166.237.168/api/user",
            method: "POST",
            data: data,
            success:function(data){
                console.log('sucess : ', data);
                $("#regisForm")[0].reset();
                $("#modal").modal("hide");
              // window.location.href= "/Users/User/Documents/login-register/view/index.html";
            }
          });
      });

  
});
