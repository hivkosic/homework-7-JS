/* Zadatak 3.
Napisi program u kojem korisnik unosi broj preko konzole. Ako korisnik nije unio broj, program racuna 
da je korisnik unio broj 7. Program zatim ispisuje "Tvoj sretni broj je ___" i potom preko Math.random funkcije 
izvlaci cijeli broj od 0 do 9. Ukoliko je izvuceni broj identican korisnikovom sretnom broju ispisi "Jackpot!",
a u suprotnom "Vise srece drugi put!". 
Napomena: Ukoliko ne znate koristiti Math.random pokusajte guglati kako se koristi.*/

var broj = +process.argv[2];

var ternary = !broj ? "7" : broj;
console.log("Tvoj sretni broj je: ",ternary);

var slucajni = Math.ceil(Math.random() * 9);
console.log("slučajni broj je", slucajni);

if (slucajni === broj) {
    console.log("JACKPOT");
}
else {
    console.log("Više sreće drugi put");
}
