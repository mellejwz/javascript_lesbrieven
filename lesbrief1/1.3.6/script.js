var boek1 = {
	titel : 'the Hunger Games',
	auteur : 'Suzanne Collins',
	ISBN : '9789000306244'
};
var boek2 = {
	titel : 'JAVASCRIPT & JQUERY',
	auteur : 'Jon Duckett',
	ISBN : '9781118531648'
};
var boek3 = {
	titel : 'the Manga Guide To Databases',
	auteur : 'Mana Takahashi & Shoko Azuma',
	ISBN : '9781593271909'
};
var boek4 = {
	titel : 'Learn To Program',
	auteur : 'Chris Pine',
	ISBN : '9781934356364'
};
var boeken=[boek1, boek2, boek3, boek4];
for (var i = 0; i < boeken.length; i++) {
	document.getElementById('iets').innerHTML+=boeken[i].titel+' door '+boeken[i].auteur+'<br />'+boeken[i].ISBN+'<br /><br />';
}