// && ve
// || veya 
// == eşitse
var sayi = 10
var sayi1 = 20
var sayi2 = 30
var sayi3 = 10

if(sayi == sayi1 || sayi == sayi2 || sayi == sayi3) // 4 sayidan en az 2 tanesi esit ise sart saglanmıs kabul edilir 
{
    console.log('esit degerler var')
}

if(sayi == sayi3 && sayi1 < sayi2) // iki degiskenin birbirine esit olmasi ve iki farklı degiskenin birinin digerinden kucuk olmasi sartini verdik
{
    console.log('iki degisken esit ve iki degiskenden biri digerinden kucuk')
}