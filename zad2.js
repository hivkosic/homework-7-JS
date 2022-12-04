/* Zadatak 2. 
Napisi program koji omogucava unos proizvoljnog broja godina preko konzole, te napisi ternarni izraz koji bira 
vrijednosti MALOLJETAN i PUNOLJETAN. Potom za MALOLJETAN ispisi "Korisnik je maloljentan", 
a za punoljetan "Korisnik je punoljetan". Ako korisnik nije unio broj napisi "Pogresan unos!".*/


var ageNum = +process.argv[2];

var korisnik = ageNum<18 ? korisnik = "maloljetan" : korisnik = "punoljetan";

var ternary = isNaN(ageNum) ? "pogrešan unos" : korisnik;

console.log(ternary);

/*if (isNaN(ageNum)) {
    console.log("Pogrešan unos");
}
else {
    console.log(korisnik);
}
ovo sam isto isprobavala 2. način
*/



