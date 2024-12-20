	function calcoloBMI(){
	
	let peso = document.getElementById("peso").value;
	
	let altezza= document.getElementById("altezza").value;
	
	let r = peso/(altezza*altezza);
	
	
	
	
	document.getElementById("res").innerHTML= r;
	
}