
const burger = document.querySelector(".burger");
const menu = document.querySelector("#menu");
const Fermer = document.querySelector("#Fermer");


burger.addEventListener("click", function() {
  menu.classList.toggle("ouvert");
  Fermer.classList.toggle("int");
  burger.classList.toggle("out");
});



Fermer.addEventListener("click", function() {
    menu.classList.toggle("ouvert");
    Fermer.classList.toggle("int");
    burger.classList.toggle("out");

});
