
function init(){
    
    attachEvents();
}
function attachEvents(){
    var firstName=document.getElementById("txtFirstName");
    firstName.addEventListener("keypress",alphabetsOnly)
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


init();



