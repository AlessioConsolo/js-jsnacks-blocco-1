// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell'array

const lista_numeri = [];

const button = document.getElementById("button");

button.addEventListener("click", function () {
  let numero1 = document.getElementById("numero1").value;
  let numero2 = document.getElementById("numero2").value;
  let numero3 = document.getElementById("numero3").value;
  let numero4 = document.getElementById("numero4").value;
  let numero5 = document.getElementById("numero5").value;
  let numero6 = document.getElementById("numero6").value;

  console.log(numero1, numero2, numero3, numero4, numero5, numero6);

  for (let i = 1; i <= 6; i++) {
    let numero = document.getElementById("numero" + i).value;

    if (numero % 2 !== 0) {
      lista_numeri.push(numero);
    }
  }

  console.log(lista_numeri);
});
