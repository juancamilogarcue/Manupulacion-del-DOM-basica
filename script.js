
const h1 = document.querySelector('h1');

let numeroUno = document.querySelector("#numero1");
let numeroDos = document.querySelector("#numero2");
const resultado = document.querySelector("#resultado");

const sumar = document.querySelector("#btncalcular");


numeroUno.addEventListener("change", cambiarvalor1)

numeroDos.addEventListener("change", cambiarvalor2)

function cambiarvalor1 (){
    numeroUno = Number(numeroUno.value);
}

function cambiarvalor2 (){
    numeroDos = Number(numeroDos.value);
}

sumar.addEventListener("click", btnOnCkick);

function btnOnCkick (){
    resultado.innerText = numeroUno + numeroDos;
}