(function () {
    //document.ready is a function
    // it waits the document to be loaded completly.
    var
        alphabetsOnly,
        bindDataToCountry,
        bindEvents,
        registerUser,
        buildOptionTag;

    $(document).ready(function () {
        bindDataToCountry();
        bindEvents();
    });

    registerUser = function () {
        alert("Click");
    };
    alphabetsOnly = function (evt) {
        if ((evt.keyCode >= 65 && evt.keyCode <= 90) || (evt.keyCode >= 97 && evt.keyCode <= 122)) {

        }
        else {
            evt.preventDefault();
        }
    };

    bindEvents = function () {
        $('#btnRegister').bind('click', registerUser);
        $('#txtFirstName,#txtLastName').bind("keypress", alphabetsOnly);
    };
    bindDataToCountry = function () {
        var countries = [{ name: "India", code: "IN" },
            { name: "United States", code: "US" },
            { name: "Canada", code: "CA" }
        ];
        //$.each will take the collection as first param
        // it is having a callback which will give index and the item.
        $.each(countries, function (index, item) {
            var tag = buildOptionTag(item);
            $('#ddlCountry').append(tag);
        });
    };
    buildOptionTag = function (data) {
        var optionTag = $("<option>");
        $(optionTag).val(data.code);
        $(optionTag).text(data.name);
        console.log($(optionTag));
        return optionTag;
    };
})();