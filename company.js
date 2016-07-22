//ways to create the objects in javascript
// name
// industry
// balance sheet
// profit
// loss

//Object literals.
/*
var company ={
    name:"Acadjs",
    industry:"trainings",
    balanceSheet:{
        profit:0,
        loss:0,
    },
    branches:[
        {location:"India"},
         {location:"US"},
         {location:"Australia"}
    ]
};
*/

var company = function () {
    this.companyName = "";
    this.industry = "";
    this.balanceSheet = {
        loss: 0,
        profit: 0
    };
};

var acadJs = new company();
acadJs.companyName = "AcadJS Inc";
acadJs.industry = "Learning";
acadJs.balanceSheet.loss = 100000;
acadJs.balanceSheet.profit = 0;
console.log(acadJs);

var newComp = new company();
console.log(newComp);
