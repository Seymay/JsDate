let kullanici=prompt("lütfen adınızı giriniz");
document.querySelector("#myName").innerHTML=kullanici;
const haftalar=[
    "pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
    "Pazar"
]

function showTime()
{    
   let clock= new Date();
   let saat= clock.getHours();
   let saniye= clock.getSeconds();
   let dakika= clock.getMinutes();
   let gun=haftalar[clock.getDay()];
    let zaman= saat+ " :"+ dakika+ ":" + saniye+ " :"+ gun;
   document.querySelector("#myClock").innerHTML=zaman;

   var t = setTimeout(function () {
    showTime();
  }, 1000);
}

showTime();
