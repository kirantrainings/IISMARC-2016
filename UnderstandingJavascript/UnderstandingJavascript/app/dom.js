function readDataFromHtml() {
    
    var firstName = document.getElementById("txtFirstName");
    firstName.value = "Its is my session";//setting the value to a text box

    //reading the html value from a text box
    var lastName = document.getElementById("txtLastName");
    console.log(lastName.value);//reaading the value from a text box;
}

function register() {
    var firstName = document.getElementById("txtFirstName");
    var lastname = document.getElementById("txtLastName");
    var country = document.getElementById("ddlCountry");
    console.log("First Name:" + firstName.value);
    console.log("Last Name:" + lastname.value);
    console.log("Country:" + country.value);
    country.value = "IN";
    console.log("I am clicked");
}
function enterFirstName() {
    console.log("I am first Name");
}

readDataFromHtml();