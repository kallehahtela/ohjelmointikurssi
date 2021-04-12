function posvsneg() 
{
    var luku = parseInt(document.getElementById('luku1').value)
    if (luku > 0 )
    {
        document.write("Kyllä");
    }
    else if (luku < 0 )
    {
        document.write("Ei");
    }
}
posvsneg()

function vkp()
{
    var luku = parseInt(document.getElementById('luku2').value);
    
    if (luku == 1)
    {
        document.write("Maanantai");
    }

    else if (luku == 2)

    {
        document.write("Tiistai");
    }

    else if (luku == 3)
    {
        document.write("Keskiviikko");
    }

    else if (luku == 4)
    {
        document.write("Torstai")
    }

    else if (luku == 5)
    {
        document.write("Perjantai");
    }

    else if (luku == 6)
    {
        document.write("Lauantai");
    }

    else if (luku == 7)
    {
        document.write("Sunnuntai");
    }

}
vkp()

function karkaus()
{
    var luku = parseInt(document.getElementById('luku3').value);

    if (luku % 4 == 0 && luku % 100 == 0)
    {
        document.write("Se on karkausvuosi");
    }

    else if (luku % 400 == 0)
    {
        document.write("Se on karkausvuosi");
    }

    else 
    {
        document.write("Se ei ole karkausvuosi");
    }

}
karkaus()

function sumkesk()
{
    var luku1 = parseInt(document.getElementById('luku4').value);
    var luku2 = parseInt(document.getElementById('luku5').value);
    var luku3 = parseInt(document.getElementById('luku6').value);
    var luku4 = parseInt(document.getElementById('luku7').value);
    var luku5 = parseInt(document.getElementById('luku8').value);
    var summa = luku1 + luku2 + luku3+ luku4 + luku5;
    var keskiarvo = summa / 5;
    
    document.write("Summa on " + summa + " ja keskiarvo on " + summa/5);
}
sumkesk()

function kerto()
{
    var luku = parseInt(document.getElementById('luku9').value);
    var lause1 =+ luku + "x 1 = " + luku * 1;
    var lause2 =+ luku + "x 2 = " + luku * 2;
    var lause3 =+ luku + "x 10 = " + luku * 2;

    document.write(lause1, lause2, lause3);

}
kerto()