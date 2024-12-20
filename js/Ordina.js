function inserisci(){
	
	
	
	let parole = [4];
	
	for(let i = 0 ; i<5 ; i++){
		
		let parola  = prompt("metti una parola" + (i+1) + ": ");
		
		parole[i] = parola;
		
	}
	
	document.getElementById("parole").innerHTML = parole;
	
	
	
	document.getElementById("sort").innerHTML = parole.sort(ordina);;
	
	
	
}


function ordina(){
	
	if(a[1] < b[1]){
		
		return -1;
		
	}
	
	if(a[1] > b[1]){
		
		return 1;
		
	}
	
	if(a[3] < b[3]){
		
		return -1;
		
	}
	
	if(a[3] > b[3]){
		
		return 1;
		
	}
	
	return 1;
	
	
}