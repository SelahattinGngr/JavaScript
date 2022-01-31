// conditionals: sart blogu

var not = 60

if(not>50) // not 50 sayisindan buyuk ise sarti koyduk
{
    console.log('gectiniz')
}

else if(not>=40) // not 40 sayisindan buyuk ise ve ya esit ise sarti koyduk
{
    console.log('butunlemeye kaldiniz') // else if: if sarti gerceklesmedigi durumda baska bir kosulun saglandigi sart komutudur
}

else // if sartinin gecerli olmadigi durumlarda else gecer
{
    console.log('kaldiniz') // if sartında 50 den buyukse gectınız yazması ıcın sartlandırdık ıf olmadıgı durumda otomatık olarak 50 den kucuk deger aldiysa else gecicektir
}
// else herhangi bir sart gerektirmez if olmuyorsa else gecer