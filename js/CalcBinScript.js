function scrivi1(){
	
	
	
	if(document.getElementById("operazione").innerHTML == ""){
		
			
		document.getElementById("primoNumero").innerHTML += "1";
		
	}else{
		
		document.getElementById("secondoNumero").innerHTML += "1";
		
	}
	
	
}

function scrivi0(){
	
	if(document.getElementById("operazione").innerHTML == ""){
		
		document.getElementById("primoNumero").innerHTML += "0";
		
	}else{
		
		document.getElementById("secondoNumero").innerHTML += "0";
		
	}
	
}

function moltiplicazione(){
	
	document.getElementById("operazione").innerHTML = "*";
	
}

function somma(){
	
	document.getElementById("operazione").innerHTML = "+";
	
}


function calcola(){
	
	let v1Str = document.getElementById("primoNumero").innerHTML;
	
	let v2Str = document.getElementById("secondoNumero").innerHTML;
	
	let operazione = document.getElementById("operazione").innerHTML;
	
	let v1 = parseInt(v1Str);
	
	let v2 = parseInt(v2Str);
	
	let r = 0;
	
	if(operazione == '*'){
		
		r = v1 * v2;
		
	}else{
		
		r = v1 + v2;
		
	}
	
	document.getElementById("res").innerHTML = r;
	
}

