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
let landingPage = document.querySelector(".features");

// get Array of images
let imgArray = [
  "../img/menClean.jpg",
  "../img/background1.jpeg",
  "../img/background2.jpeg",
];

// change background url
setInterval(function () {
  let randomNum = Math.floor(Math.random() * imgArray.length);
  landingPage.style.transition = "3s";
  landingPage.style.backgroundImage = 'url(" ' + imgArray[randomNum] + '")';
}, 4000);
