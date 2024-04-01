function validate(){
    var username=document.getElementById("username").value;
    var nameerror=document.getElementById("nameerror");
    var alphaexp=/^[a-zA-Z]+$/;
    if(username==""){
        nameerror.innerHTML=("Name is empty");

    }
    else{
        if(username.match(alphaexp)){
            nameerror.innerHTML="";
        }
        else{
            nameerror.innerHTML="only alphabets";
            return false;
        }
    }
    var phone=document.getElementById("phone").value;
    var phoneerror=document.getElementById("phoneerror");
    var alphaexp1=/^[0-9]+$/;
    if(phone==""){
        phoneerror.innerHTML=("phonenumber is empty");
    }
    else{
        if(phone.match(alphaexp1)){
           phoneerror.innerHTML="";
        }
        else{
            phoneerror.innerHTML="only digits";
            return false;
        }
    }
    var password=document.getElementById("password").value;
    var passerror=document.getElementById("passerror");
    var alphaexp2=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if(password==""){
        passerror.innerHTML=("password is empty");

    }
    else{
        if(password.match(alphaexp2)){
           passerror.innerHTML="";
        }
        else{
            passerror.innerHTML="should contain a capital and atleast six characters";
            return false;
        }
    }
    var email=document.getElementById("email").value;
    var mailerror=document.getElementById("mailerror");
    var alphaexp3=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if(email==""){
        mailerror.innerHTML=("email is empty");
        return false;

    }
    else{
        if(email.match(alphaexp3)){
           mailerror.innerHTML="";
        }
        else{
            mailerror.innerHTML="please give correct format";
            return false;
        }
    }

}