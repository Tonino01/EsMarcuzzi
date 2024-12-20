
function scegli() {
    
	alert("vfe");
	
	
	
	countdown();
	
	
}



let randInt = Math.floor((Math.random() * 12) + 5);
let i = 0;

function countdown(){
	
	setInterval(incrementa();, 100);
	
	document.getElementById("countdown").innerHTML = randInt - i ;
	
}

function incrementa(){
	
	
	i = i+1;
	
}