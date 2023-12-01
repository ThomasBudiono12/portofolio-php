//Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
document.querySelector("#hmenu").onclick = () => {
  navbarNav.classList.toggle("active");
};

const hambuger = document.querySelector("#hmenu");
document.addEventListener("click", function (e) {
  if (!hambuger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
