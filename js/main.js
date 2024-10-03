let burgerBtn = document.querySelector(".burger-menu-btn");
let burgerMenu = document.querySelector(".burger-menu");
let isBurgerOpen = false;

burgerBtn.onclick = function () {
  if (!isBurgerOpen) {
    burgerMenu.style.display = "block";
    burgerBtn.style.backgroundPosition = "center left 50px, center"; // corrected position
    isBurgerOpen = true;
  } else {
    burgerMenu.style.display = "none";
    burgerBtn.style.backgroundPosition = "center, center left 50px"; // corrected to a single valid position
    isBurgerOpen = false;
  }
};
