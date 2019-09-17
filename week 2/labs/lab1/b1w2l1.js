// begin hier je JavaScript commandos
var voornaam = prompt("Wat is je voornaam?");
var achternaam = prompt("Wat is je achternaam?");
var leeftijd = prompt("Wat is je leeftijd?");


document.write("Voornaam: "+voornaam+"<br>");
document.write("Achternaam: "+achternaam+"<br>");
document.write("Leeftijd: "+leeftijd+"<br>");



var tafel = 6;
var teller;  
for( teller = 1; teller <= 10; teller++)
{ // begin code per iteratie
 document.write( teller + " is nog niet boven 10. Ik mag door: ");
 document.write( teller + "&times;" + tafel + " = " + (teller*tafel) + "<br/>");
}
</script>
</head>
<body>
</body>
</html>