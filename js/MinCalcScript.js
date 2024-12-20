function calcoloMin(){
	
	let data = document.getElementById("data").value;
	
	let meseStr = data.getMonth;
	
	let annoStr = data.getYear;
	
	switch (meseStr) {
	
		case "Gennaio":
			mese = 1;
		break;
		
		case "Febbraio":
			mese = 2;
		break;
		
		case "Marzo":
			mese = 3;
		break;
	
	}
	
	mese = meseStr.parseInt;
	

	
	let mesi = [12];
	
	mesi[1] = 31;
	
	mesi[2] = 28;
	
	mesi[3] = 31;
	
	mesi[4] = 30;
	
	mesi[5] = 31;
	
	mesi[6] = 30;
	
	mesi[7] = 31;
	
	mesi[8] = 31;
	
	mesi[9] = 30;
	
	mesi[10] = 31;
	
	mesi[11] = 30;
	
	mesi[12] = 31;
	
	let minMesi = mesi[mese]*24*60;
	
	let minAnno  = (2024 - anno)*365*24*60;
	
	let minA = minAnno + minMesi;
	
	
	
	document.getElementById("res").innerHTML= res;
	
}