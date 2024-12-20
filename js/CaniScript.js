const carlinoSrc = "img/carlino.jpg";

const basenjiSrc = "img/basenji.jpg";

const sanbernardoSrc = "img/san bernardo.jpg";

const terranovaSrc = "img/terranova.jpg";






const Cani = [
							{posizione: "1", descrizione: "basenji (Congo, 43 cm)", immagine: basenjiSrc},
 							{posizione: "1", descrizione: "carlino (Cina, 30 cm)", immagine: carlinoSrc},
							{posizione: "1", descrizione: "san bernardo (Svizzera, 80 cm)", immagine: sanbernardoSrc},
							{posizione: "1", descrizione: "terranova (Canada, 75 cm)", immagine: terranovaSrc}
						];


function mostra(){




	for(let i = 0 ; i < Cani.length ; i++){

		const cane = document.createElement("div");


		const posizione = document.createElement("p");
		posizione.innerText = "POSIZIONE IN CLASSIFICA: " + Cani[i].posizione;

		const img = document.createElement("img");
		img.src = Cani[i].immagine;

		const descrizione = document.createElement("p");
		descrizione.innerText = "Descrizione: " + Cani[i].descrizione;


		cane.appendChild(posizione);
		cane.appendChild(img);
		cane.appendChild(descrizione);

		document.getElementById("classifica").appendChild(cane);

	}

}
