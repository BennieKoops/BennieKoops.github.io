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
for (let I = 0; I < 4; I++) {
    var TPD = parseFloat((priceDrinks[0].replace(',','.')));
    priceDrinks.shift();
    priceDrinks.push(TPD);
};

// function to test if change of input field gets detected
function test() {
    alert(drinks)
    
};

// for loop that adds the event listener to all drinks input fields on webpage. It detects when value in those fields is changed.
for (let D = 0; D < NDI; D++) {
    var ADL = document.getElementsByName("aantalDrinks")[D];
    ADL.addEventListener('change', function DMM() {
        var DAMM = document.getElementsByName("aantalDrinks")[D];
        if (DAMM.value < 0) {
            DAMM.value = 0;
            alert("de minimale bestelhoeveelheid is 0");
        } else if (DAMM.value > 15) {
            DAMM.value = 15;
            alert("de maximale bestelhoeveelheid is 15");
        }
    });
    var DPBTN = document.getElementsByName("DPBTN")[D];
    DPBTN.addEventListener('click', function AVD() {
        var X = document.getElementsByName ("aantalDrinks")[D];
        if (X.value < 15) {
            ++X.value;   
        };
    });
    var DMBTN = document.getElementsByName("DMBTN")[D];
    DMBTN.addEventListener('click', function SVD() {
        var X = document.getElementsByName ("aantalDrinks")[D];
        if (X.value > 0) {
            --X.value;
        };
    });
};

for (let D = 0; D < NFI; D++) {
    var AFL = document.getElementsByName("aantalFood")[D];
    AFL.addEventListener('change', function FMM() {
        var FAMM = document.getElementsByName("aantalFood")[D];
        if (FAMM.value < 0) {
            FAMM.value = 0;
            alert("de minimale bestelhoeveelheid is 0");
        } else if (FAMM.value > 15) {
            FAMM.value = 15;
            alert("de maximale bestelhoeveelheid is 15");
        }
    });
    var FPBTN = document.getElementsByName("FPBTN")[D];
    FPBTN.addEventListener('click', function AVF() {
        var X = document.getElementsByName ("aantalFood")[D];
        if (X.value < 15) {
            ++X.value;   
        };
    });
    var FMBTN = document.getElementsByName("FMBTN")[D];
    FMBTN.addEventListener('click', function SVF() {
        var X = document.getElementsByName ("aantalFood")[D];
        if (X.value > 0) {
            --X.value;
        };
    });
};

console.log (drinks);

