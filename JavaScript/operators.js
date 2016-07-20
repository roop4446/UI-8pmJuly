//matrimony

var profiles = [{
        name: "kiran",
        profession: "Software",
        income: 20000
},
    {
        name: "John",
        profession: "Business",
        income: 100000

              }];


function selectProfile() {

    for (var i = 0; i < profiles.length; i++) {


        if (profiles[i].income >= 100000 || profiles[i].profession == "Business") {
            console.log(profiles[i]);
        }
    }
}


selectProfile();
