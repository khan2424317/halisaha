
let favori1Mi = false;

const favori1 = document.querySelector("#favori1");
const yorumA1 = document.querySelector("#yorumA1");
const yorumB1 = document.querySelector("#yorumB1");
const yorumC1 = document.querySelector("#yorumC1");
const yorumListesi1 = document.querySelector("#yorumListesi1");

favori1.addEventListener("click", function () {
  if (favori1Mi === false) {
    favori1Mi = true;
    favori1.textContent = "♥ Favorilerde";
  } else {
    favori1Mi = false;
    favori1.textContent = "♡ Favorilere ekle";
  }
  favori1.classList.toggle("secili");
});

yorumA1.addEventListener("click", function () {
  yorumListesi1.textContent = yorumListesi1.textContent + "Zemin çok iyi. ";
});
yorumB1.addEventListener("click", function () {
  yorumListesi1.textContent = yorumListesi1.textContent + "Fiyat uygun. ";
});
yorumC1.addEventListener("click", function () {
  yorumListesi1.textContent = yorumListesi1.textContent + "Işıklar güzel. ";
});

let favori2Mi = false;

const favori2 = document.querySelector("#favori2");
const yorumA2 = document.querySelector("#yorumA2");
const yorumB2 = document.querySelector("#yorumB2");
const yorumC2 = document.querySelector("#yorumC2");
const yorumListesi2 = document.querySelector("#yorumListesi2");

favori2.addEventListener("click", function () {
  if (favori2Mi === false) {
    favori2Mi = true;
    favori2.textContent = "♥ Favorilerde";
  } else {
    favori2Mi = false;
    favori2.textContent = "♡ Favorilere ekle";
  }
  favori2.classList.toggle("secili");
});

yorumA2.addEventListener("click", function () {
  yorumListesi2.textContent = yorumListesi2.textContent + "Zemin çok iyi. ";
});
yorumB2.addEventListener("click", function () {
  yorumListesi2.textContent = yorumListesi2.textContent + "Fiyat uygun. ";
});
yorumC2.addEventListener("click", function () {
  yorumListesi2.textContent = yorumListesi2.textContent + "Işıklar güzel. ";
});