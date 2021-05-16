function validate(){

     ///Name vlaidation
    var res = document.getElementById('fname').value
    if(res.length==0){
        document.getElementById('fmsg').innerHTML="**First name shoudn't be Empty"
        document.getElementById("fname").style.border="1px solid red"
        return false;
    }
    else if(res.length<3){
        document.getElementById('fmsg').innerHTML="**Firstname length should be minimum 3"
        document.getElementById('fname').style.border="1px solid red"
        return false;
    }
    else if(res.length>=15){
        document.getElementById('fmsg').innerHTML="*firstname should be lessthan 16 characters"
        document.getElementById('fname').style.border="1px solid red"
        return false;
    }
        else if(res.length!=0 && res.length>=3 && res.length<16){
            document.getElementById('fmsg').innerHTML=""
            document.getElementById('fname').style.border=""

        }
      //password validation


      
      var p=document.getElementById('pass').value
    var q=document.getElementById('cpass').value
    if(p!=q){
        document.getElementById('cmsg').innerHTML="**Passwords shoud be  match"
        document.getElementById("cpass").style.border="1px solid red"
    }
    

    if(p.length==0){
        document.getElementById('psmsg').innerHTML="**Password Shouldn't be empty"
        document.getElementById("pass").style.border="1px solid red"
        return false;
    }
    else if(p.length<6){
        document.getElementById('psmsg').innerHTML="**password shouldnt be less than 6 characters"
        document.getElementById('pass').style.border="1px solid red"
        return false;
    }
    else if(p.length>15){
        document.getElementById('psmsg').innerHTML="**password must be less than 15 characters"
        document.getElementById('pass').style.border="1px solid red"
        return false;


    }
    else if(p.length!=0 && p.length>=6 && res.length<=15){
        document.getElementById('psmsg').innerHTML=""
        document.getElementById('pass').style.border=""

    }

    
     //phone number validation
    else if(isNaN(pres)){
        document.getElementById('pmsg').innerHTML="**phone number shoudn't contain characters"
        document.getElementById('phone').style.border="1px solid red"
        return false;
    }
    var pres = document.getElementById('phone').value
    if(pres.length==0){
        document.getElementById('pmsg').innerHTML="**phone number shoudn't be Empty"
        document.getElementById("phone").style.border="1px solid red"
        return false;
    }
    else if(pres.length<10){
        document.getElementById('pmsg').innerHTML="**phone number should not cointain less than 10 digts"
        document.getElementById('phone').style.border="1px solid red"
        return false;
    }
    else if(pres.length>10){
        document.getElementById('pmsg').innerHTML="**phone number should not cointain greater than 10 digts"
        document.getElementById('phone').style.border="1px solid red"
        return false;

    }
    else if(pres.charAt(0)<6){

        document.getElementById('pmsg').innerHTML="**A/C to INS, first digit of phone number should start from 6 or 7 or 8 or 9"
        document.getElementById('phone').style.border="1px solid red"
        return false;


    }
    else if( pres.length = 10){
        document.getElementById('pmsg').innerHTML=""
        document.getElementById('phone').style.border=""

    }
  
}



