//tehtävä 1
function pieninSuurin(taulu)
{
    taulu.sort((a, b) => a-b);
    var pienin = taulu.shift();
    var suurin = taulu.pop();
    console.log("Taulukon pienin oli: " + pienin + " ja suurin oli: " + suurin);
}
pieninSuurin([6,8,2,9,5,4,7,11,14,69,99,23,33,111,1111,11111]);

//tehtävä 2
function parillinenPariton(luku)
{
    if(luku%2==0)
    {
        console.log("Luku on parillinen");
    }
    else {
        console.log("Luku on pariton");
    }
}
parillinenPariton(3);

//tehtävä 3
function numeroNimeksi(luku)
{

switch(luku)
{
    case 1:
        console.log("Tammikuu");
        break;
    case 2:
        console.log("Helmikuu");
        break;
    case 3:
        console.log("Maaliskuu");
        break;
    case 4:
        console.log("Huhtikuu");
        break;
    case 5:
        console.log("Toukokuu");
        break;
    case 6:
        console.log("Kesäkuu");
        break;
    case 7:
        console.log("Heinäkuu");
        break;
    case 8:
        console.log("Elokuu");
        break;
    case 9:
        console.log("Syyskuu");
        break;
    case 10:
        console.log("Lokakuu");
        break;
    case 11:
        console.log("Marraskuu");
        break;
    case 12:
        console.log("Joulukuu");
        break;
    default:
        console.log("Anna kuukausi numerona");
        break;
    }
}

numeroNimeksi(3);


//tehtävä 4
// Luokka kirjoitetaan isolla aina isolla
//this.etunimi:llä määritetään constructoriin arvot
class Osoiterekisteri {
    constructor(etunimi, sukunimi, lahiosoite, postinumero, postitoimipaikka, puhelin, sahkoposti)
    {
        this.etunimi = etunimi;
        this.sukunimi = sukunimi;
        this.lahiosoite = lahiosoite;
        this.postinumero = postinumero;
        this.postitoimipaikka = postitoimipaikka;
        this.puhelin = puhelin;
        this.sahkoposti = sahkoposti;
    }
}
var Kalle = new Osoiterekisteri("Kalle", "Hahtela", "Rahkasammaleentie 11", "04300", "Tuusula", "0400583563", "kalle.hahtela@edu.keuda.fi");
//postinumeron haku 
console.log(Kalle.lahiosoite);

//tehtävä 5 
function aakkosissa(teksti)
{
    var taulu = Array.from(teksti);
    taulu.sort();
    console.log(taulu);
    teksti = taulu.join("").toString();
    return teksti;
}
console.log(aakkosissa("webmaster"));

//tehtävä 6
function arviointi(pisteet)
{
    if(pisteet < 50)
    {
        return "hylätty";
    }

    else if(pisteet < 60)
    {
        return "T1";
    }

    else if(pisteet < 70)
    {
        return "T2";
    }
    else if(pisteet < 80 )
    {
        return "H3";
    }
    else if(pisteet < 90)
    {
        return "H4";
    }
    else if(pisteet < 100)
    {
        return "K5";
    }
}
console.log("Daniel " + arviointi(80));
console.log("Viivi " + arviointi(77));
console.log("Tiina " + arviointi(88));
console.log("Ismael " + arviointi(95));
console.log("Tuomas " + arviointi(68));