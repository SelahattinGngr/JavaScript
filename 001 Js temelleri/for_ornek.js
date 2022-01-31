function sayiuret(ustlimit = 50)
{
   return Math.ceil(Math.random() * ustlimit)
}

for(var i=1;i<=10;i++)
{
    console.log(sayiuret()) // sayiuret fonksiyonunu for dongusu ile 10 kere calistirmis olduk
}

function sayiuret2(ustlimit = 50)
{
   return Math.ceil(Math.random() * ustlimit)
}

for(var j=1;j<=6;j++) // ic ice dongu kullandik icerdeki dongu bittigi zaman bu donguye gerı donup tekrar ıcerdekı donguyu baslatacaktır
{                     // bu dongu bıtene kadar bu boyle devam eder
    console.log('KOLON')
    for(var i=1;i<=6;i++)
    {
        console.log(sayiuret2())
    }
}