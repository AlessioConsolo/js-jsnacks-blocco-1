//Chiedi un numero di 4 cifre all’utente
//e calcola la somma di tutte le cifre che compongono il numero.

const button = document.getElementById("button");

button.addEventListener("click", function () {
  let numero = document.getElementById("numero").value;

  let somma = 0;
  for (let i = 0; i < numero.length; i++) {
    somma += parseInt(numero[i]);
  }

  document.getElementById("message").innerHTML =
    "La somma delle cifre è: " + somma;
});
