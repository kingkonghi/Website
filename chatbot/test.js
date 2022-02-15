	//Validtion Code For Inputs

  var email = document.forms['form']['username'];
  var password = document.forms['form']['password'];
  var status1 = document.getElementById("status1");
  var status1 = document.getElementById("status2");
  
  var email_error = document.getElementById('username_error');
  var pass_error = document.getElementById('pass_error');
  
  email.addEventListener('textInput', email_Verify);
  password.addEventListener('textInput', pass_Verify);
  
  function validated(){
    if (email.value.length < 9) {
      username.style.border = "1px solid red";
      status1.innerHTML ="Too short email"
      status1.focus();
      return false;
    }
    if (password.value.length < 6) {
      password.style.border = "1px solid red";
      status2.innerHTML = "Too short password.";
      status2.focus();
      return false;
    }
  
  }
  function email_Verify(){
    if (email.value.length >= 8) {
      email.style.border = "1px solid silver";
      status1.innerHTML = "Success";
      return true;
    }
  }
  function pass_Verify(){
    if (password.value.length >= 5) {
      password.style.border = "1px solid silver";
      status2.innerHTML = "Success.";
      return true;
    }
  }

  var reset= document.getElementById("reset");
  