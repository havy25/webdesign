// let menu = document.querySelector("#menu-bars");
// let navbar = document.querySelector(".navbar");
document.querySelector("#search-icon").onclick = () => {
  document.querySelector("#search-form").classList.toggle("active");
};
document.querySelector("#close").onclick = () => {
  document.querySelector("#search-form").classList.remove("active");
};

// document.addEventListener("DOMContentLoaded", function () {
//   var collapsibleLink = document.querySelector(".toggle-collapse");
//   var collapsibleCard = document.querySelector(".card-header");

//   collapsibleLink.addEventListener("click", function () {
//     collapsibleLink.classList.toggle("active");
//     collapsibleCard.classList.toggle("active");
//   });
// });
// document.addEventListener("DOMContentLoaded", function () {
//   var collapsibleLink = document.querySelector(".toggle-collapse");
//   var collapsibleCard = document.querySelector(".card-header");
//   var icon = collapsibleLink.querySelector("i");

//   collapsibleLink.addEventListener("click", function () {
//     collapsibleLink.classList.toggle("active");
//     collapsibleCard.classList.toggle("active");

//     if (icon.classList.contains("fa-angle-down")) {
//       icon.classList.remove("fa-angle-down");
//       icon.classList.add("fa-angle-up");
//     } else {
//       icon.classList.remove("fa-angle-up");
//       icon.classList.add("fa-angle-down");
//     }
//   });
// });
