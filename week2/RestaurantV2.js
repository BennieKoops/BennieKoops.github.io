// Arrays for collecting the contents of the menu table
var drinks = [];
var priceDrinks = [];
var aantalDrinks = [];
var food = [];
var priceFood = [];
var aantalFood = [];

// Variables that indicate the ammount the classes are used per class in menu table
var NDI = document.getElementsByClassName('drinks').length;
var NFI = document.getElementsByClassName('food').length;

// For loops that put the contents of the menu table into the arrays
for (let D = 0; D < NDI; D++) {
    drinks.push (document.getElementsByClassName('drinks')[D].innerHTML);
    priceDrinks.push (document.getElementsByClassName('priceDrinks')[D].innerHTML);
};

for (let D = 0; D < NFI; D++) {
    food.push (document.getElementsByClassName('food')[D].innerHTML);
    priceFood.push (document.getElementsByClassName('priceFood')[D].innerHTML);
};

// For loop makes strings in price array into number value for calculating prices, with thanks to Robert for help
for (let I = 0; I < NDI; I++) {
    var TP = parseFloat((priceDrinks[0].replace(',','.')));
    priceDrinks.shift();
    priceDrinks.push(TP);
};
for (let I = 0; I < NFI; I++) {
    var TP = parseFloat((priceFood[0].replace(',','.')));
    priceFood.shift();
    priceFood.push(TP);
};

// var for defining the bestelling table
var tbl = document.getElementById('bestelling');

// function that adds cells to table row
function addCell(tr, val, cl) {
    var td = document.createElement('td');
    td.innerHTML = val;
    td.className = cl;
    tr.appendChild(td);
};

// function that adds rows to the defined table
function addRow(tbl, item, itemcl, aantal, prijs) {
    
    var tr = document.createElement('tr');

    addCell(tr, item, itemcl);
    addCell(tr, aantal, itemcl);
    addCell(tr, "€", itemcl);
    addCell(tr, prijs, itemcl);

    tbl.appendChild(tr);
    
};

// function that creates the head of the table
function BHead(tbl) {
    var tr = document.createElement('tr');
    var td = document.createElement('td');

    td.innerHTML = "Bestellings Bon";
    td.id = "BBon";

    tr.appendChild(td);
    tbl.appendChild(tr);
};

// function that creates the subhead of the table for drinks
function addHeadRowD(tbl) {

    var tr = document.createElement('tr');
    var td = document.createElement('td');

    td.innerHTML = "Drinks";
    td.id = "DBBon";

    tr.appendChild(td);
    tbl.appendChild(tr);
};

// function that creates the subhead of the table for food
function addHeadRowF(tbl) {

    var tr = document.createElement('tr');
    var td = document.createElement('td');

    td.innerHTML = "Food";
    td.id = "FBBon";

    tr.appendChild(td);
    tbl.appendChild(tr);
};

// Drinks
// For loop that listens to changes in the menu table to the ammount of ordered drinks
for (let D = 0; D < NDI; D++) {
    
    function test6() {
        var test3 = drinks[D].replace(/ /g,"_");
        var test2 = document.getElementById("BBon");
        var test4 = document.getElementById("DBBon");
        var test5 = document.getElementsByClassName(test3);
        console.log (test5);
        var TP = priceDrinks[D] * aantalDrinks[D];

        if (test2 === null) {
            BHead(tbl);
            addHeadRowD(tbl);
            addRow(tbl, drinks[D], test3, aantalDrinks[D], TP.toFixed(2));
        }   else if (test4 === null) {
            addHeadRowD(tbl);
            addRow(tbl, drinks[D], test3, aantalDrinks[D], TP.toFixed(2));
        }   else if (test5.length === 0) {
            addRow(tbl, drinks[D], test3, aantalDrinks[D], TP.toFixed(2));
        }   else if (test5.length === 4) {
            test5[1].innerHTML = aantalDrinks[D];
            test5[3].innerHTML = TP.toFixed(2);
        };
    };

    var DPBTN = document.getElementsByName("DPBTN")[D];
    DPBTN.addEventListener('click', function AVD() {
        var X = document.getElementsByName ("aantalDrinks")[D];
        if (X.value < 15) {
            ++X.value; 
            aantalDrinks[D] = X.value;
        };
        test6();

    });

    var DMBTN = document.getElementsByName("DMBTN")[D];
    DMBTN.addEventListener('click', function SVD() {
        var X = document.getElementsByName ("aantalDrinks")[D];
        if (X.value > 0) {
            --X.value;
            aantalDrinks[D] = X.value;
        };
        test6();
      
    });
    var ADL = document.getElementsByName("aantalDrinks")[D];
    ADL.addEventListener('change', function DMM() {
        var DAMM = document.getElementsByName("aantalDrinks")[D];
        if (DAMM.value < 0) {
            DAMM.value = 0;
            alert("de minimale bestelhoeveelheid is 0");
        } else if (DAMM.value > 15) {
            DAMM.value = 15;
            alert("de maximale bestelhoeveelheid is 15");
        };
        aantalDrinks[D] = DAMM.value;
        test6();
    }
    
    );
    
};

// food
// For loop that listens to changes in the menu table to the ammount of ordered drinks
for (let D = 0; D < NFI; D++) {
    function test7() {
        var test3 = food[D].replace(/ /g,"_");
        var test2 = document.getElementById("BBon");
        var test4 = document.getElementById("FBBon");
        var test5 = document.getElementsByClassName(test3);
        console.log (aantalFood);
        var TP = priceFood[D] * aantalFood[D];
        console.log (TP);

        if (test2 === null) {
            BHead(tbl);
            addHeadRowF(tbl);
            addRow(tbl, food[D], test3, aantalFood[D], TP.toFixed(2));
        }   else if (test4 === null) {
            addHeadRowF(tbl);
            addRow(tbl, food[D], test3, aantalFood[D], TP.toFixed(2));
        }   else if (test5.length === 0) {
            addRow(tbl, food[D], test3, aantalFood[D], TP.toFixed(2));
        }   else if (test5.length === 4) {
            test5[1].innerHTML = aantalFood[D];
            test5[3].innerHTML = TP.toFixed(2);
        } else if (test5[1] === 0 ) {
            
        };
    };

    var AFL = document.getElementsByName("aantalFood")[D];
    AFL.addEventListener('change', function FMM() {
        var FAMM = document.getElementsByName("aantalFood")[D];
        if (FAMM.value < 0) {
            FAMM.value = 0;
            alert("de minimale bestelhoeveelheid is 0");
        } else if (FAMM.value > 15) {
            FAMM.value = 15;
            alert("de maximale bestelhoeveelheid is 15");
        };
        test7();
    });
    var FPBTN = document.getElementsByName("FPBTN")[D];
    FPBTN.addEventListener('click', function AVF() {
        var X = document.getElementsByName ("aantalFood")[D];
        if (X.value < 15) {
            ++X.value;
            aantalFood[D] = X.value;
        };
        test7();
    });
    var FMBTN = document.getElementsByName("FMBTN")[D];
    FMBTN.addEventListener('click', function SVF() {
        var X = document.getElementsByName ("aantalFood")[D];
        if (X.value > 0) {
            --X.value;
            aantalFood[D] = X.value;
        };
        test7();
    });
};

console.log (drinks);

