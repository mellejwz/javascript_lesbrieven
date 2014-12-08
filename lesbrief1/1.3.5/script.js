var string = "hippopotomonstrosesquippedaliofobie";
var capital = [true, false];
var crazyString = string.split("");

for(i=0;i<crazyString.length;i++){
	if (capital[Math.round(Math.random())] == true){
		crazyString[i] = crazyString[i].toUpperCase();
	}
	else{
		crazyString[i] = crazyString[i].toLowerCase();
	}
	document.getElementById('iets').innerHTML = crazyString.join('');
}