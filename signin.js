function login()
{
  var username = document.getElementById("un").value;
  var password = document.getElementById("pass").value;
  if((username==("pavan") && password=="2020"))
  {
    return true;
    console.log(true)
  }
  else{
    document.getElementById("err").innerHTML= "Invalid UserName / Password"
    return false
  }
}

