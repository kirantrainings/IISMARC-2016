//i want to create a travel portal
//i want to add a feature to generate the ticket.
// flight , Bus, Ship and train.

(function () {
    function init() {
        document.getElementById("btnGenerate").addEventListener("click", buildTicket);
        document.getElementById("btnGenerate2").addEventListener("click", buildTicket);
    }

    function buildTicket() {
        if (this.id == 'btnGenerate') {
            var mode = document.getElementById('ddlTransportMode').value;
            var source = document.getElementById('txtSource').value;
            var destination = document.getElementById('txtDestination').value
            var getTicket = generateTicket(mode);
            getTicket.calculateCost(1000);
            getTicket.printTicket(source, destination);

        }
        else {
            var mode = document.getElementById('ddlTransportMode2').value;
            var source = document.getElementById('txtSource2').value;
            var destination = document.getElementById('txtDestination2').value
            var getTicket = generateTicket(mode);
            getTicket(source, destination);
            getTicket.calculateCost(2000);
            getTicket.printTicket(source, destination);
        }
    }


    function generateTicket(transportMode) {
        var price;
        return {
            calculateCost: function (distance) {
                if (transportMode == "train") {
                    price = distance * 10;
                }
                if (transportMode = "flight") {
                    price = distance * 100;
                }
            },
            printTicket: function (source, destination) {

                console.log(transportMode + "Ticket Generated from");
                console.log(source + " To ==>" + destination);
                console.log(price);
            }
        }
    }

    //var flightTicket = generateTicket("Flight");

    //var trainTicket = generateTicket("Train");

    //flightTicket("Hyderabad", "NewJersy");

    //trainTicket("Hyderabad", "Vijayawada");
    init();

})();