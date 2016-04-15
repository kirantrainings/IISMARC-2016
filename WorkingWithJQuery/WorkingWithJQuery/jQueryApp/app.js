(function () {
    var readTextboxes, readRadioButtons, bindEvents, registerUser;
    var defaultGender = $('input[type="radio"]');
    $(defaultGender[1]).prop("checked", true);


    var getAllInputs = $('.form-control');

    console.log($(getAllInputs));
    registerUser = function () {
        var user = {};
        user.FirstName = $('#txtFirstName').val();
        user.LastName = $('#txtLastName').val();
        $('#txtPhoneNumber').val("9959688870");

        var radios = $('input[type="radio"]');
        for (var i = 0; i < radios.length; i++) {
            if ($(radios[i]).prop("checked")) {
                user.Gender = $(radios[i]).val();
                break;
            }
        }
        console.log(user);
    }

    bindEvents = function () {
        document.getElementById("btnRegister").addEventListener("click", registerUser);
    }

    bindEvents();
})();