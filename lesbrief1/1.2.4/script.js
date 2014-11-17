var dagen = ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"];
var dag=0;
for(i=0; i<7; i++){
	document.getElementById("week").innerHTML+=dagen[dag] + "\n";
	dag++;
}