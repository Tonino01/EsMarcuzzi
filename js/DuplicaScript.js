
let isBloccato = "";




function scambia() {
	
	let img = document.getElementById("img").src;
	let img1 = document.getElementById("img1").src;
	
	let vettimg = [img, img1];
    
    let buffer = vettimg[0];

    
    document.getElementById("img").src = vettimg[1]; 
    
    document.getElementById("img1").src = buffer;     
}


function duplica1(){
	
	let img = document.getElementById("img").src;
	let img1 = document.getElementById("img1").src;
	
	
	
	document.getElementById("img1").src = img;
	
}

function duplica2(){
	
	let img = document.getElementById("img").src;
	let img1 = document.getElementById("img1").src;
	
	document.getElementById("img").src = img1;
	
}

function ruota(){
	
	setInterval(scambia, 1000);
	
}




const dimensioniFont = ['12px', '16px', '20px', '24px'];
let indiceAttuale = 0;

function incrementa() {
    
    const bottoni = document.querySelectorAll('.button1');

    
    bottoni.forEach(bottone => {
        bottone.style.fontSize = dimensioniFont[indiceAttuale];
    });

    
    indiceAttuale = (indiceAttuale + 1) % dimensioniFont.length; // Torna all'inizio se supera l'array
}


function blocca(){
	alert("vwe");
	isBloccato = true;
	
}

function riprendi(){
	
	isBloccato = false;
	
}

function scompare(){
	
	document.getElementById("img").src = null;
	
	document.getElementsByClassName(".button1").innerHTML = null
	
}