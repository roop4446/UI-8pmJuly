var initPage = function () {
    bindEvents();
};

var bindEvents = function () {
    var labels = document.getElementsByTagName("td");
    for (var i = 0; i < labels.length; i++) {
        labels[i].addEventListener("mouseenter", changeColor);
        labels[i].addEventListener("mouseleave", revertColor);
    };
    /*var controls = getControls();
    controls.lblFirstName
        .addEventListener("mouseenter", changeColor);
    controls.lblFirstName.addEventListener("mouseleave", revertColor);*/
};

var getControls = function () {
    return {
        lblFirstName: document.getElementById("lblFirstName"),
        lblLastName: document.getElementById("lblLastName"),
        lblAge: document.getElementById("lblAge")
    };
};

var changeColor = function () {
    this.style.backgroundColor = "red";
};

var revertColor = function () {
    this.style.backgroundColor = "";
};

initPage();
