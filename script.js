const display = document.getElementById("display");
const AC = document.getElementById("AC")
const percent = document.getElementById("%")
const divide = document.getElementById("/")
const seven = document.getElementById("7");
const eight = document.getElementById("8")
const nine = document.getElementById("9")
const multiply = document.getElementById("X")
const four = document.getElementById("4")
const five = document.getElementById("5")
const six = document.getElementById("6")
const minus = document.getElementById("-")
const one = document.getElementById("1")
const two = document.getElementById("2")
const three = document.getElementById("3")
const plus = document.getElementById("+")
const zero = document.getElementById("0")
const point = document.getElementById(".")
const equal = document.getElementById("=")

function calculator(){
    
}

equal.addEventListener("click", function () {
    display.innerHTML = parseFloat(seven.value);
})

