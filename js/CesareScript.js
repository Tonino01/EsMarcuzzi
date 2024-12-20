function cripta(){
	
	
	
	let parola = document.getElementById("parola").value;
	
	let parolaCifrata = "";
	
	for(let i = 0 ; i < parola.length ; i++){
		
		let newchar = String.fromCharCode(parola.charCodeAt(i) + 1);
		
		parolaCifrata += newchar;
		
	}
	
	
	document.getElementById("criptata").innerHTML = parolaCifrata;
	
}