
const temaDugmesi = document.querySelector("#tema");


temaDugmesi.addEventListener("click", function () {


  document.body.classList.toggle("karanlik");

  if (document.body.classList.contains("karanlik")) {
    temaDugmesi.textContent = "Aydınlık";
  } else {
    temaDugmesi.textContent = "Karanlık";
  }
});