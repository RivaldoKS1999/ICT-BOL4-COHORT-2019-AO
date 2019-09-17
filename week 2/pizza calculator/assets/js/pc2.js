//Rivaldo Kousbroek
//Pizza calculator opdracht

var Smallpizza = prompt ("hoeveel smallpizzas wilt u?");
var prijs = 6.50
document.write("smallpizza: ", Smallpizza*prijs +"<br>")
var Mediumpizza = prompt ("hoeveel mediumpizzas wilt u?");
var prijs2 = 11.99
document.write("mediumpizza: ", Mediumpizza*prijs2 +"<br>");
var Largepizza = prompt ("Hoeveel large pizzas wilt u?");
var prijs3 = 14.99
document.write("largepizza: ", Largepizza*prijs3 +"<br>");

var totaalsmall = Smallpizza*prijs;
var totaalmedium = Mediumpizza*prijs2;
var totaallarge = Largepizza*prijs3;
document.write("eindtotaal: €",totaalsmall+totaalmedium+totaallarge +"<br>")