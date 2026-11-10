
addEventListener("load", (e) => {
 console.log({ e });

const alphabet ="abcdefghijklmnopqrstuvwxyz".split("");
function getNumbers ($min = 0, $max= 6){
    return Math.floor(Math.random() * ($max + 1 - $min) + $min);
}

const $class = ["_1", "_2", "_3", "_4", "_5", "_6", "_7"];
function getABC() {
    let x = getNumbers(0,25);
    let currentLetter;
if (x % 2 == 0 || x % 3 == 0){
   currentLetter = alphabet [x].toLocaleUpperCase();
}
else
    currentLetter = alphabet[x];
return currentLetter;

}
function build($goto = 100) {
let divNumbers = document.getElementById("numbers");
divNumbers.innerHTML = "";
let input = 0;
let classDigit = "";
for (let i = 0; i < $goto; i++) {
const displayLetter = i % 7 == 0 || i % 4 == 0;
if (displayLetter == true){
  input = getABC();
  classDigit = "letter";
}
else{
    classDigit = "_number";
    input = getNumbers(1000, 3000);
}
createDivNumbers(divNumbers, input, classDigit);
}
// outside of the loop;
let spCount = document.getElementById("spCount");
let divs = document.querySelectorAll( "div#numbers > div");
spCount.textContent= divs.length;

}
function createDivNumbers(divNumbers, $input = 215, $classDigit = "_number" ) {
let div = document.createElement("div");
div.innerHTML = `<span>${$input}</span>`;
const _class = $class[getNumbers(0, $class.length - 1)];
div.querySelector("span").classList.add(_class);
div.querySelector("span").classList.add($classDigit);

div.querySelector("span").classList.contains("_7");

let is7 =div.querySelector("span").classList.contains("_7");

if (is7) {
  const parentElement = div.querySelector("span").parentElement;
    parentElement.style.color = "white";
    parentElement.style.backgroundColor = "black";

}
divNumbers.appendChild(div);
}
build(200);

let spCount = document.getElementById("spCount");
let divs = document.querySelectorAll( "div#numbers > div");
spCount.textContent= divs.length;

let btExecute = document.getElementById("bt-execute");
let inputCount = document.getElementById("input-count");

btExecute.onclick = (be) => {

console.log({ be, inputCount: inputCount.value });
 build(inputCount.value);
};
});
