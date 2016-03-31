
function register(){
    //object literals.
    // object literal declaration.
    var person ={
        firstName:"",
        lastName:"",
        country:""
    };
    person.firstName= document.getElementById("txtFirstName").value;
    person.lastName= document.getElementById("txtLastName").value;
    person.country= document.getElementById("ddlCountry").value;
    
    console.log(person);
}

function changeColor(){
    document.getElementsByTagName("td").style="background-color:red";
}

function changeBack(){
    document.getElementById("tdFirstName").style="background-color:white";
}












//function calling/invoking.
//init();