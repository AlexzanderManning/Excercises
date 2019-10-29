///////////////////////////////////////
// Lecture: Hoisting

var day= whatDay();

console.log(day);

var sayName = getName();

function myName(){
    function getName(){
        var name = "Molly";
        return name;
    }
    return name;
}





function whatDay(){
    var day = 'Friday';
    return day;
}

 var greeting = (function (){
    var day = whatDay();
    var name = getName();
    var message = "hello" + name + " its " + day  + " aint it!?";
    return message;
 });




















///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword









