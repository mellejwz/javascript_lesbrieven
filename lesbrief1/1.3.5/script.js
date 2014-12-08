var string = "hippopotomonstrosesquippedaliofobie";
var capital = [true, false];
var crazyString = string.split("");

for(i=0;i<crazyString.length;i++){
	var randomChar = crazyString[i];
	if (capital[Math.round(Math.random())] == true){
		crazyString[i] = crazyString[i].toUpperCase();
	}
	document.getElementById('iets').innerHTML = crazyString.join('');
}


var a = "melle".toUpperCase();