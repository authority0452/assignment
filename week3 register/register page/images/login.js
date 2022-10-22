function validate(){
  let Email = document.getElementById("email").
  value;
  let password = document.getElementById("password").
  value;

  if(Email =="webdev" && password == "learn")
  {
    alert("Login successfuly!");
  }else{
    alert("Login failed")
  } 
}