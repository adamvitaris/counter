const dec = document.querySelector(".decrease");
const reset = document.querySelector(".reset");
const inc = document.querySelector(".increase");
let varNum = 0;

let num = document.querySelector(".number");

inc.addEventListener("click", function() {
    varNum ++;
    num.textContent = varNum;
    updateColor();
});

dec.addEventListener("click", function() {
    varNum--;
    num.textContent = varNum;
    updateColor();
});

reset.addEventListener("click", function() {
    varNum = 0;
    num.textContent = varNum;
    updateColor();
});

function updateColor() {
if (varNum < 0) {
    num.style.color = "#bb2525";
} else if (varNum > 0) {
    num.style.color = "#25bb32";
} else {
    num.style.color = "#222";
}}