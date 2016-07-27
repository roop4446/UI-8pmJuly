//Outer function
function getTicket(transportMode) {

    var discount;

    if (transportMode == "Flight") {
        discount = "10%";
    }
    if (transportMode == "Cruise") {
        discount = "20%";
    }

    //inner function
    return function printTicket(source, destination) {

        console.log("Mode of Transport:" + transportMode);
        console.log("From: " + source);
        console.log("To: " + destination);
        console.log("Your discount is: " + discount);
        console.log("---------");
    };

}

var bookAFlightTicket = getTicket("Flight");

var bookACruiseTicket = getTicket("Cruise");

bookAFlightTicket("India", "Texas");

bookACruiseTicket("Vizag", "Andaman");
