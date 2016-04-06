//1. immediate functions are self excutables
//2. Immediate function will not attach the variables to the //window object
// immediate functions will not pollute the global scope
// immediate functions are anonymous mostly
//step 1
(
  function(){
     //this.
      //{} represent an object.
      this.htmlControls={
          firstName:document.getElementById("txtFirstName"),
          lastName:document.getElementById("txtLastName"),
          country:document.getElementById("ddlCountry"),
          registerBtn:document.getElementById("btnRegister"),
          phoneNumber:document.getElementById("txtPhone")
      };
      
      function addEvents(){
                 
          htmlControls
           .registerBtn
           .addEventListener("click",registerUser);          
      }
      
      function registerUser(){
          var user ={};
          user.firstName=htmlControls.firstName.value;
          user.lastName=htmlControls.lastName.value;
          user.phoneNumber=htmlControls.phoneNumber.value;
          user.country=htmlControls.country.value;
          console.log(user);
      }
      
      function numbersOnly(evt){
    if(!(evt.keyCode>=47 && evt.keyCode<=57)){
        evt.preventDefault();
    }
}
      addEvents();
  }
)();
