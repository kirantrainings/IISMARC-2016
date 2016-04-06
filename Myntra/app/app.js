(
    function () {
       this.register = {
            firstName: "",
            lastName: "",
            age: ""
        };
       
        this.htmlControls = {
       firstName:document.getElementById("txtFirstName"),
       lastName: document.getElementById("txtLastName"),
       phoneNumber:document.getElementById("txtPhoneNumber"),
            states:document.getElementById("ddlStates"),
       registerButton: document.getElementById("btnRegister")
    };
       
        function registerUser() {
            register.firstName = htmlControls.firstName.value;
            register.lastName = htmlControls.lastName.value;
    var phoneNumber=utilites
    .formatPhone(htmlControls.phoneNumber.value);
            register.phoneNumber = phoneNumber;
            console.log(register);
        }
       
        function getStates(){
            var stateList=[
                {"name":"Andhra Pradesh",code:"AP"},
                       {"name":"Telangana",code:"TG"},
                       {"name":"Uttar Pradesh",code:"UP"}];
            
            for(var i=0;i<stateList.length;i++){
                var name=stateList[i].name;
                var code=stateList[i].code;
                
             var optionTag=document.createElement("option");
                optionTag.value=code;
                optionTag.textContent=name;
                console.log(optionTag);
                htmlControls.states.appendChild(optionTag);
            }
        }
        
        
       function init() {
htmlControls.firstName              .addEventListener("keypress", utilites.alphabetsOnly);
            htmlControls.            registerButton.addEventListener("click", registerUser);
           getStates();
           createLabelDynamically();
        };
    
        function createLabelDynamically(){
          var labelEmail = document.createElement("label");
          labelEmail.innerHTML="Email";
          labelEmail.className="control-label col-xs-2";
          console.log(labelEmail);
          var divEmail = document.getElementById("divEmail");
            divEmail.appendChild(labelEmail);
      }
        init();

    }
)();
