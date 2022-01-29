// functions: fonksiyonlar
var sayi1 = 5
var sayi2 = 34
var sayi3 = 11
var sayi4 = 9    // sayısal loto örneği
var sayi5 = 41
var sayi6 = 25
console.log('kolon 1 : ' + sayi1 + ' ' + sayi2 + ' ' + sayi3 + ' ' + sayi4 + ' ' + sayi5 + ' ' + sayi6)
// çıktıda sureklı bizim verdiğimiz değerleri ekrana verecek. fonksiyon kullanarak bunları random sayı verecek sekılde komut verecegız. 

// sayısal loto 1-49 arasındakı sayılar ıle oynanıyor 
var sayi7 = Math.ceil(Math.random() * 49) // math.random fonksıyonu 0-1 arasında random sayı ekrana verır örn: 0,085123 - 0,95423 ...
var sayi8 = Math.ceil(Math.random() * 49) // math.random sonuna * 49 ekleyerek 0-49 arasında random sayı vermesını sagladık örn: 35,655616
var sayi9 = Math.ceil(Math.random() * 49) // math.ceil kullanarak ondaklıklı sayıyı en yakın sonuca yuvarlıyor bu sayede ekrana tam sayı verıyor
var sayi10 = Math.ceil(Math.random() * 49)
var sayi11 = Math.ceil(Math.random() * 49)
var sayi12 = Math.ceil(Math.random() * 49)
console.log('kolon 2 : ' + sayi7 + ' ' + sayi8 + ' ' + sayi9 + ' ' + sayi10 + ' ' + sayi11 + ' ' + sayi12)

// fonksıyonlarla yazdıgımız kodu her calıstırdıgımızda her seferınde farklı sayıları ekrana bastırır.

// fonksiyonlarda herhangı bır degısıklık yapmak ıcın butun fonksıyonları degıstırmek gerekıyor bunun onune gecmek ıcın kendı fonksıyonumuzu yazmalıyız.

function sayiuret() // function :fonksiyon sayiuret: fonksıyon adı parantezler: parametre için şu anda kullanmayacağız
{
   return Math.ceil(Math.random() * 1000)
}
// return keyword olarak adlandırılıyor
// fonksıyonda return kullanarak fonksıyon ıcerısınde neyı kullanması gerektıgını belırtıyoruz (fonksıyon ıcerısınde bırden fazla komut olabılıyor onları ayırmak ıcın)
// sayiuret() yazarak yazdıgımız fonksıyonu cagırıyoruz

var sayi13 = sayiuret()
var sayi14 = sayiuret()
var sayi15 = sayiuret() // yukarıda her sayı ıcın ayrı fonksıyon yazmıstık kolon 3 sayılarında kendı fonksıyonumuzu ureterek sayıları fonksıyon ıcınden verdık
var sayi16 = sayiuret()
var sayi17 = sayiuret() 
var sayi18 = sayiuret()

console.log('kolon 3 : ' + sayi13 + ' ' + sayi14 + ' ' + sayi15 + ' ' + sayi16 + ' ' + sayi17 + ' ' + sayi18)

/* her sayının genıslıgını ayarlamak ıcın tek tek degıstırmek gerekıyordu ('49' olan sayıları 50 yapmak gıbı) 
tek fonksıyon ıle sadece tek bır yerı degıstırerek aynı ıslemı yaptık */

// parametre kullanımı

function sayiuret2(ustlimit) // sayiuret fonksıyonuna ustlımıt parametresı atadık 
{
   return Math.ceil(Math.random() * ustlimit) // az oncekı kolonlarda ust lımıtı 49 - 70 olarak belırlemıstık bu sefer lımıt belırleme ıslemını yazdırırken yapacagız
}                                  // isteğe baglı ust lımıtı kendımız belırleyebılırız yapmak ıcın ust lımıtı sılıp ıstedıgımız sayıyı yazmak örn: kolon 3

var sayi19 = sayiuret2(53)
var sayi20 = sayiuret2(30)
var sayi21 = sayiuret2(7)
var sayi22 = sayiuret2(99) // bu sefer her kolonun ayrı ust lımıtı olmus oldu
var sayi23 = sayiuret2(41)
var sayi24 = sayiuret2(16)

console.log('kolon 4 : ' + sayi19 + ' ' + sayi20 + ' ' + sayi21 + ' ' + sayi22 + ' ' + sayi23 + ' ' + sayi24)

function sayiuret2(ustlimit) // fonksıyonu console.log(ustlimit) seklınde yazdırmaya calısırsak hata verır
{
   var degisken01 = "degisken01" // fonksıyon ıcerısınde olusturdugumuz degıskenı dısarıda yazdırmaya kalkarsak hata verir
   return Math.ceil(Math.random() * ustlimit)
}

/* var degisken01 = "degisken01" */ // fonksıyon dısında olusturdugumuz ıcın ekrana basılabılır
function sayiuret2(ustlimit)
{
   return Math.ceil(Math.random() * ustlimit)
}                                