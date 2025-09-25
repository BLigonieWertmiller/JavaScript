const elemDisplay = document.querySelector("#display").innerText = "0 ";
console.log(elemDisplay);

let valor1 = 0;
let valor2 = 0;
let operacion = "";

const btnNum1 = document.querySelector("#btnNum1");
const btnNum2 = document.querySelector("#btnNum2");
const btnNum3 = document.querySelector("#btnNum3");
const btnNum4 = document.querySelector("#btnNum4");
const btnNum5 = document.querySelector("#btnNum5");
const btnNum6 = document.querySelector("#btnNum6");
const btnNum7 = document.querySelector("#btnNum7");
const btnNum8 = document.querySelector("#btnNum8");
const btnNum9 = document.querySelector("#btnNum9");
const btnNum0 = document.querySelector("#btnNum0");
const btnSuma = document.querySelector("#btnSuma");
const btnResta = document.querySelector("#btnResta");
const btnMultiplicacion = document.querySelector("#btnMultiplicacion");
const btnDivision = document.querySelector("#btnDivision");
const btnIgual = document.querySelector("#btnIgual");



function calcular(num1, num2, op){
    switch(op){
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num1 / num2;
        default:
            return "No hay mas operaciones, compra una calculadora cientifica";
    }
}
function asignarValor(valor){
    if(!operacion || !valor1){
        valor1 = valor;
    } else{
        valor2 = valor;
    }
}    
        
btnNum1.addEventListener("click",(e) => {
    document.querySelector("#display").innerText = e.target.innerText;
    asignarValor(Number(e.target.innerText));
    console.log("1");
});
btnNum2.addEventListener("click",(e) => {
    document.querySelector("#display").innerText = e.target.innerText;
    asignarValor(Number(e.target.innerText));
    console.log("2");
});
btnNum3.addEventListener("click",(e) => {
    document.querySelector("#display").innerText = e.target.innerText;
    asignarValor(Number(e.target.innerText));
    console.log("3");
});
btnNum4.addEventListener("click",(e) => {
    document.querySelector("#display").innerText = e.target.innerText;
    asignarValor(Number(e.target.innerText));
    console.log("4");
});
btnNum5.addEventListener("click",(e) => {
    document.querySelector("#display").innerText = e.target.innerText; 
    asignarValor(Number(e.target.innerText));
    console.log("5");
});


btnNum6.addEventListener("click",(e) => {
    document.querySelector("#display").innerText = e.target.innerText; 
    asignarValor(Number(e.target.innerText));
    console.log("6");
});
btnNum7.addEventListener("click",(e) => {
    document.querySelector("#display").innerText = e.target.innerText; 
    asignarValor(Number(e.target.innerText));
    console.log("7");
});
btnNum8.addEventListener("click",(e) => {
    document.querySelector("#display").innerText = e.target.innerText; 
    asignarValor(Number(e.target.innerText));
    console.log("8");
});
btnNum9.addEventListener("click",(e) => {
    document.querySelector("#display").innerText = e.target.innerText; 
    asignarValor(Number(e.target.innerText));
    console.log("9");
});
btnNum0.addEventListener("click",(e) => {
    document.querySelector("#display").innerText = e.target.innerText; 
    asignarValor(Number(e.target.innerText));
    console.log("0");
});

btnSuma.addEventListener("click", (e) => {
    operacion = "+";});
btnResta.addEventListener("click", (e) => {
    operacion = "-";});
btnMultiplicacion.addEventListener("click", (e) => {
    operacion = "*";});
btnDivision.addEventListener("click", (e) => {
    operacion = "/";});

btnIgual.addEventListener("click", (e) => {
    debugger;
    const total = calcular(valor1, valor2, operacion);
    document.querySelector("#display").innerText = total;
    valor1 = total;
    operacion = "";
});