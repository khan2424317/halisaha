let secilenGun = "";
let saat = 16;

const saatYazi = document.querySelector("#saatYazi");
const saatArtir = document.querySelector("#saatArtir");
const saatAzalt = document.querySelector("#saatAzalt");
const kaydet = document.querySelector("#kaydet");
const mesaj = document.querySelector("#mesaj");

const pzt = document.querySelector("#pzt");
const sali = document.querySelector("#sali");
const carsamba = document.querySelector("#carsamba");
const persembe = document.querySelector("#persembe");
const cuma = document.querySelector("#cuma");
const cumartesi = document.querySelector("#cumartesi");
const pazar = document.querySelector("#pazar");

pzt.addEventListener("click", function () {
  secilenGun = "Pazartesi";
});
sali.addEventListener("click", function () {
  secilenGun = "Salı";
});
carsamba.addEventListener("click", function () {
  secilenGun = "Çarşamba";
});
persembe.addEventListener("click", function () {
  secilenGun = "Perşembe";
});
cuma.addEventListener("click", function () {
  secilenGun = "Cuma";
});
cumartesi.addEventListener("click", function () {
  secilenGun = "Cumartesi";
});
pazar.addEventListener("click", function () {
  secilenGun = "Pazar";
});

saatArtir.addEventListener("click", function () {
  if (saat < 23) {
    saat = saat + 1;
    saatYazi.textContent = saat;
  }
});

saatAzalt.addEventListener("click", function () {
  if (saat > 16) {
    saat = saat - 1;
    saatYazi.textContent = saat;
  }
});

kaydet.addEventListener("click", function () {
  if (secilenGun === "") {
    mesaj.textContent = "Lütfen bir gün seçin.";
  } else {
    mesaj.textContent = secilenGun + " " + saat + ".00 için rezervasyonunuz alındı.";
  }
});