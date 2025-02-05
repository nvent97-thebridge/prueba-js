const btnAgregar = document.getElementById("btnAgregar");
const btnSumatoria = document.getElementById("btnSumatoria");

let suma = 0;

function agregar() {
  const inputValue = document.getElementById("inputNumero").value;

  const listaUl = document.getElementById("lista");
  const elementoLista = document.createElement("li");
  elementoLista.innerText = "El numero es: " + inputValue;
  listaUl.appendChild(elementoLista);

  suma += Number(inputValue);
}

function sumatoria() {
  const titulo = document.getElementById("titulo");
  titulo.innerText = "La sumatoria es: " + suma;
}

btnAgregar.addEventListener("click", agregar);
btnSumatoria.addEventListener("click", sumatoria);
