//step1.
// get years
// get control
// create option tag
// append option tag to control

function getYears() {
    var years = [];
    var date = new Date();
    var currentYear = date.getFullYear();
    for (var i = currentYear; i > currentYear - 20; i--) {
        //console.log(i);
        years.push({
            text: i,
            value: i
        });
    }
    return years;
}

function getVehicles() {
    var vehicles = [{
            year: 2016,
            make: "Audi"
        },
        {
            year: 2016,
            make: "BMW"
        },
        {
            year: 2016,
            make: "Nissan"
        },
        {
            year: 2015,
            make: "Maruti"
        },
        {
            year: 2015,
            make: "BMW"
        },
        {
            year: 2015,
            make: "Audi"
        },
        {
            year: 2015,
            make: "Mahindra"
        },
        {
            year: 2014,
            make: "Porche"
        },
        {
            year: 2014,
            make: "Jaguar"
        },
        {
            year: 2014,
            make: "Mercedez"
        },
        {
            year: 2014,
            make: "Mahindra"
        }
                 ];
    return vehicles;
}

function loadYears() {
    var years = getYears();
    var control = getPageControls().year;
    for (var i = 0; i < years.length; i++) {
        buildOptionTag(years[i].value, years[i].text, control);
    }
}

function loadMakes() {
    var controls = getPageControls();
    var selectedYear = controls.year.value;
    controls.make.innerHTML = "";
    var filteredVehicles = getVehiclesForYear(selectedYear);
    for (var i = 0; i < filteredVehicles.length; i++) {
        buildOptionTag(filteredVehicles[i].make, filteredVehicles[i].make, controls.make);
    }
}

function getVehiclesForYear(selectedYear) {
    var vehicles = getVehicles();
    var filteredVehicles = [];
    for (var i = 0; i < vehicles.length; i++) {
        if (vehicles[i].year == selectedYear) {
            filteredVehicles.push(vehicles[i]);
        }
    }

    return filteredVehicles;
}

function getPageControls() {
    var controls = {};
    controls.year = document.getElementById("ddlYear");
    controls.make = document.getElementById("ddlMake");
    return controls;
}

function bindEvents() {
    var controls = getPageControls();
    controls.year.addEventListener("change", loadMakes);

}

function buildOptionTag(value, text, control) {
    var option = document.createElement("option");
    option.value = value;
    option.textContent = text;
    control.appendChild(option);
}


function initPage() {
    loadYears();
    bindEvents();
}

initPage();
