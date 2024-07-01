// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

const lista_invitati = [
  "Francesco Ferdinandi",
  "Giovanni Giubotti",
  "Ignazio La Russa",
  "Pippo Franco",
  "Carlo Conti",
];

const button = document.getElementById("Gatsby-button");

button.addEventListener("click", function () {
  let invitati = document.getElementById("invitati").value;
  let ospite_confermato = false;

  for (let i = 0; i < lista_invitati.length; i++) {
    if (lista_invitati[i].toLowerCase() === invitati.toLowerCase()) {
      ospite_confermato = true;
    }
  }

  if (ospite_confermato === true) {
    document.getElementById("messaggio").innerText = "Accesso autorizzato!";
  } else {
    document.getElementById("messaggio").innerText = "Accesso negato.";
  }
});
