let nav = document.querySelectorAll("nav li a");
nav.forEach(function (el) {
  el.onclick = function () {
    nav.forEach(function (el) {
      el.classList.remove("active");
    });
    this.classList.add("active");
  };
});
