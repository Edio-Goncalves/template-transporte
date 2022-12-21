const menuHamburger = document.getElementById("menuHamburger");

function toggleMenu() {
  let navi = document.getElementById("navi");
  navi.classList.toggle("active");
}
menuHamburger.addEventListener("click", toggleMenu);
