var c, currentScrollTop = 0, navbar = document.querySelector('nav');

window.onscroll = function () {
  var a = window.scrollY;
  var b = navbar.offsetHeight;
  currentScrollTop = a;
  if (c < currentScrollTop && a > 2*b) {
    navbar.classList.add("scroll");
  } else if (c > currentScrollTop && a > b) {
    navbar.classList.remove("scroll");
  }
  c = currentScrollTop;
};
