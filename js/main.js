let navItems = document.querySelectorAll(".nav-item ");
function updateActiveNavLink() {
  const currentPage = window.location.href;
  console.log(currentPage);
  navItems.forEach((item) => {
    const link = item.querySelector("a");
    console.log(item);
    if (link.href === currentPage) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}
document.addEventListener("DOMContentLoaded", function () {
  updateActiveNavLink();
});

//////////change background for hero section

// select landing page element
// Select landing page element
let landingPage = document.querySelector(".features");

// Get array of images
let imgArray = ["../img/transito/bg2.webp"];

// Change background url at intervals
setInterval(function () {
  let randomNum = Math.floor(Math.random() * imgArray.length);
  landingPage.style.transition = "3s";
  landingPage.style.backgroundImage =
    'linear-gradient(to left, rgb(11 12 12 / 19%), rgb(8 23 26 / 85%)), url("' +
    imgArray[randomNum] +
    '")';
}, 4000);
