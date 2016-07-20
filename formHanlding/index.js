function getCheckBoxSelection() {
    var checkBoxes = document.getElementsByTagName("input");
    var selectedCheckBox = [];
    for (var i = 0; i < checkBoxes.length; i++) {
        if (checkBoxes[i].checked) {
            selectedCheckBox.push(checkBoxes[i].value);
        }
    }

    console.log(selectedCheckBox);
}
