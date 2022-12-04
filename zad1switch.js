/*Zadatak 1. 
Napisi program koji ovisno o varijabli time mogucih vrijednosti ZORA, JUTRO, POSLIJEPODNE, POPODNE, PRIJEPODNE, 
PREDVECER, NOC ispisuje Dobro jutro, Dobar dan ili Dobra vecer. Unos time varijable neka bude preko konzole,
te ako korisnik nije unio ni jednu od mogucnosti neka ispis bude: 
Koje je to doba dana? Program napisi uz pomoc switch case-a. */

var time = process.argv[2];

switch (time) {
    case "ZORA":
    case "JUTRO":
    case "PPRIJEPODNE":
    console.log("Dobro jutro");
    break;

    case "PODNE":
    case "POSLIJEPODNE":
    console.log("DobAR DAN");
    break;

    
    case "PREDVEČER":
    case "NOĆ":
    console.log("DobrA večer");
    break;

default:
    console.log("Koje je to doba dana?");
}