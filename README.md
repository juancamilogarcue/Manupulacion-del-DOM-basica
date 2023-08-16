##  Manupulacion-del-DOM: nivel basico
<p>
temas vistos:
</p>

- document.querySelector( )
- innerText ( )
- innerHTML ( )
- .addEventListener("evento", function)

#### Javascript　

```javascript

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
```

#### HTML code

```html
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Manipulación del DOM básica - Curso Práctico de JavaScript</title>
</head>
<body>
  <h1 class="verde">Manipulación del DOM básica</h1>

  <input id="numero1" />
  <input id="numero2" />

  <button id = "btncalcular">sumar</button>

    <p id = "resultado"></p>

  <script src="./script.js"></script>
</body>
</html>
```
