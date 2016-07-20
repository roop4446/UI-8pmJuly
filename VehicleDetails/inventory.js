function registerVehicle() {
    var controls = pageControls();
    var vehicleDetails = {};
    vehicleDetails.make = controls.make.value;
    vehicleDetails.model = controls.model.value;
}

function pageControls() {
    var controls = {};
    controls.make = document.getElementById("txtVehicleMake");
    controls.model = document.getElementById("txtVehicleModel");
    controls.year = document.getElementById("ddlYear");

    return controls;

}

function getYears() {
    var years = [];
    var date = new Date();
    var currentYear = date.getFullYear();
    for (var i = currentYear - 10; i <= currentYear; i++) {
        years.push({
            text: i,
            value: i
        });
    }

    return years;
}


function buildYearDropdown() {
    var years = getYears();
    for (var i = 0; i < years.length; i++) {
        buildOptionTag(years[i], pageControls().year);
    }
}

function buildOptionTag(data, parentElement) {
    var optionTag = document.createElement("option");
    optionTag.value = data.value;
    optionTag.textContent = data.text;
    parentElement.appendChild(optionTag);

}

buildYearDropdown();
