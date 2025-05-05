const menuMobile = document.getElementById("menu-mobile");

function openMenu() {
  menuMobile.classList.remove("hidden");
  menuMobile.classList.add("flex");
}

function closeMenu() {
  menuMobile.classList.remove("flex");
  menuMobile.classList.add("hidden");
}
