/*Zadatak 1. 
Napisi program koji ovisno o varijabli time mogucih vrijednosti ZORA, JUTRO, POSLIJEPODNE, POPODNE, PRIJEPODNE, 
PREDVECER, NOC ispisuje Dobro jutro, Dobar dan ili Dobra vecer. Unos time varijable neka bude preko konzole,
te ako korisnik nije unio ni jednu od mogucnosti neka ispis bude: 
Koje je to doba dana? Program napisi uz pomoc if-a. */

var time = process.argv[2];

if (time === "ZORA" || time === "JUTRO"|| time === "PPRIJEPODNE" ) {
    console.log("Dobro jutro");
}
else if (time === "PODNE" || time === "POSLIJEPODNE") {
    console.log("DobAR DAN");
}
else if (time === "PREDVEČER" || time === "NOĆ") {
    console.log("DobRA večer");
}
else {
    console.log("Koje je to doba dana?");
}
