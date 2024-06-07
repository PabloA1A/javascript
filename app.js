import { nombre } from "./js/ex1.js";
import { sum } from "./js/ex2.js";
import { printTerminal } from "./js/printData.js";
import { containsEnglish } from "./js/ex3.js";
import { reverseWords } from "./js/ex4.js";

let numb1 = 3
let numb2 = 5

function app() {
    printTerminal(nombre)
    printTerminal(sum(numb1 + numb2))
    /onsole.log(containsEnglish);
    console.log(reverseWords);

}

app()