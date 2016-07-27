//Outer function
function getTicket(transportMode) {
    var discount;

    function getDiscount() {
        if (transportMode == "Flight") {
            discount = "10%";
        }
        if (transportMode == "Cruise") {
            discount = "20%";
        }
        return discount;
    }
    //inner function
    return {
        printTicket: function (source, destination) {
            console.log("Mode of Transport:" + transportMode);
            console.log("From: " + source);
            console.log("To: " + destination);
            console.log("Your discount is: " + getDiscount());
            console.log("---------");
        }

    };


}

var bookAFlightTicket = getTicket("Flight");

var bookACruiseTicket = getTicket("Cruise");

bookAFlightTicket.printTicket("India", "Texas");

bookACruiseTicket.printTicket("Vizag", "Andaman");
