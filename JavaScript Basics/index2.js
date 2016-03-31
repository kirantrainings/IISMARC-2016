function init(){
    var firstName = document.getElementById("txtFirstName");
    var lastName = document.getElementById("txtLastName");
    var phoneNumber = document.getElementById("txtPhoneNumber");
    var register = document.getElementById("btnRegister");
    
    firstName.addEventListener('keydown',handleAlpahbetsOnly);
    lastName.addEventListener('keyup',handleAlpahbetsOnly);
    phoneNumber.addEventListener('keypress',handleNumbersOnly);
    register.addEventListener("click",handleClick);
}

function handleAlpahbetsOnly(evt){
    console.log(evt.keyCode);
    console.log(evt.type);
    if(
        (evt.keyCode>=65 && evt.keyCode<=90)||
        (evt.keyCode==8 ||evt.keyCode==32 ||evt.keyCode==16)
      ){
        
    }
    else{
        alert("invalid key");
        evt.preventDefault();
    }
}

function handleNumbersOnly(evt){
    console.log(evt.keyCode);
    console.log(evt.type);
     if(
         (evt.keyCode>=48 && evt.keyCode<=57)
        ||(evt.keyCode==8 ||evt.keyCode==32||evt.keyCode==16)
       ) {
    }
    else{
        alert("invalid key");
        evt.preventDefault();
    }
}

function handleClick(evt){
    console.log(evt.type);
    console.log(evt.keyCode);
}














init();