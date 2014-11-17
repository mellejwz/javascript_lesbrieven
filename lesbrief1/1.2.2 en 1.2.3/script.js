var fahrenheit;
var celsius;
function omrekenen(iets){
	if(iets=="c"){
		celsius = document.converter.celsius.value;
		fahrenheit = celsius*9/5+32;
		if(celsius==""){
			document.converter.fahrenheit.value="";
		}
		else{
			document.converter.fahrenheit.value=fahrenheit + "\xB0F";
		}
	}
	if(iets=="f"){
		fahrenheit = document.converter.fahrenheit.value;
		celsius = Math.round(((fahrenheit-32)*5/9)*100)/100;
		if(fahrenheit==""){
			document.converter.celsius.value="";
		}
		else{
			document.converter.celsius.value=celsius + "\xB0C";
		}
	}
}