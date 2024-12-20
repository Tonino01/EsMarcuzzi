let vettCarte;

document.addEventListener('DOMContentLoaded', function() {
  let canvas = document.getElementById('canvas');
  let ctx = canvas.getContext('2d');
  let spriteSheet = new Image();
  
  spriteSheet.src = 'D:\\Users\\daniel.tonin\\Documents\\EsMarcuzzi-main\\img\\carte_napoletane.png'; // Percorso del tuo Sprite Sheet

  spriteSheet.onload = function() {
    let cardWidth = 64;  // Larghezza di ogni carta
    let cardHeight = 96; // Altezza di ogni carta
    let cardsPerRow = 10; // Numero di carte per riga nel Sprite Sheet
    
    // Inizializza l'array delle carte
    vettCarte = [
      "1 coppe", "2 coppe", "3 coppe", "4 coppe", "5 coppe", "6 coppe", "7 coppe",
      "donna coppe", "cavallo coppe", "re coppe", "1 denari", "2 denari", "3 denari",
      "4 denari", "5 denari", "6 denari", "7 denari", "donna denari", "cavallo denari",
      "re denari", "1 bastoni", "2 bastoni", "3 bastoni", "4 bastoni", "5 bastoni", "6 bastoni",
      "7 bastoni", "donna bastoni", "cavallo bastoni", "re bastoni", "1 spade", "2 spade",
      "3 spade", "4 spade", "5 spade", "6 spade", "7 spade", "donna spade",
      "cavallo spade", "re spade"
    ];
  }

  // Funzione per estrarre una carta
  function estrarre() {
    let indice = estrai();
    let cartaEstratta = vettCarte[indice];
    displayCard(indice);
    document.getElementById("carta").textContent = cartaEstratta;
  }

  // Funzione per generare un indice casuale
  function estrai() {
    return Math.floor(Math.random() * vettCarte.length);
  }

  // Funzione per visualizzare la carta sul canvas
  function displayCard(index) {
    let cardWidth = 102;  // Larghezza di ogni carta
    let cardHeight = 165; // Altezza di ogni carta
    let cardsPerRow = 10; // Numero di carte per riga nel Sprite Sheet

    let x = (index % cardsPerRow) * cardWidth;
    let y = Math.floor(index / cardsPerRow) * cardHeight;

    // Pulire il canvas prima di disegnare
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Disegnare la carta dal Sprite Sheet
    ctx.drawImage(spriteSheet, x, y, cardWidth, cardHeight, 0, 0, cardWidth, cardHeight);
  }

  // Associa la funzione estrarre al bottone
  document.querySelector('.button1').addEventListener('click', estrarre);
});
