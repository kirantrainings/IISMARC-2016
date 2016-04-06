
function init(){
    attachEvents();
}
function attachEvents(){
    var firstName=document.getElementById("txtFirstName");
    firstName.addEventListener("keypress",alphabetsOnly)
    var register = document.getElementById("btnRegister");
    register.addEventListener("click",registerUser);
    register.addEventListener('mouseover',changeColorOfButton);
     register.addEventListener('mouseleave',changeColorOfButtonBack);
}

function alphabetsOnly(evt){
    if(
        (evt.keyCode>=65 && evt.keyCode<=90)||
        (evt.keyCode>=97 && evt.keyCode<=122)
    ){
     
    }
    else{
                evt.preventDefault();
    }
}


function numbersOnly(evt){
    if(!(evt.keyCode>=47 && evt.keyCode<=57)){
        evt.preventDefault();
    }
}

function registerUser(){
    console.log("registering the user");
}

function changeColorOfButton(){
    var register = document.getElementById("btnRegister");
    register.style="background-color:blue";
}
function changeColorOfButtonBack(){
    var register = document.getElementById("btnRegister");
    register.style="background-color:";
}

init();



