// ===== FUNCTIONS WITH NO PARAMETERS ===== //

function sayHello (){

    let output1 = document.querySelector("#output1")
    output1.innerHTML = "Hello Harry! 👋 Welcome to JavaScript functions review!";
}
function sayDate (){

    let output1 = document.querySelector("#output1")
    output1.innerHTML = "Today is October 29th 2025!";
}
function sayMotivation (){

    let output1 = document.querySelector("#output1")
    output1.innerHTML = "People will hate on you for being poor and being broke. If you're fat or Skinny. Fuck what they say keep goin ";
}

function sayLebron (){

    let output1 = document.querySelector("#output1")
    output1.innerHTML = "LeBron Raymone James!!!🐐🐐🐐";
}







// ===== FUNCTIONS WITH PARAMETERS ===== //
function add(val1, val2){
let output2 = document.querySelector("#output2")
    output2.innerHTML = `The Sum of ${val1} + ${val2} = ${val1 + val2}`;
}

function greetings(name) {
    let output2 = document.querySelector("#output2")
    output2.innerHTML = `Hello ${name}`;
}

function Multiply(val1, val2){
let output2 = document.querySelector("#output2")
    output2.innerHTML = `The Area Of The Rectangle is ${val1} * ${val2} = ${val1 * val2}`;
}

function colors(name) {
    let output2 = document.querySelector("#output2")
    output2.innerHTML = `My Favorite Color is ${name}`;
}

function weather(name) {
    let output2 = document.querySelector("#output2")
    output2.innerHTML = `25° Celsius is ${name} Degrees Fahrenheit`;
}

// ===== EVENT LISTENERS THAT CALLS FUNCTIONS ===== //
document.querySelector(".sayHelloBtn") .addEventListener("click", function(){
    sayHello();
});
document.querySelector(".TdyDateBtn") .addEventListener("click", function(){
    sayDate();
});

document.querySelector(".MotivationBtn") .addEventListener("click", function(){
    sayMotivation();
});
document.querySelector(".LebronBtn") .addEventListener("click", function(){
    sayLebron();
});


document.querySelector(".showSum") .addEventListener("click", function(){
    add(5, 7);
});

document.querySelector(".GreetBtn") .addEventListener("click", function(){
    greetings("Harry");
});

document.querySelector(".MultiplyBtn") .addEventListener("click", function(){
    Multiply(10, 6);
});

document.querySelector(".ColorBtn") .addEventListener("click", function(){
    colors("Blue");
});
document.querySelector(".WeatherBtn") .addEventListener("click", function(){
    weather(77);
        });