document.addEventListener("DOMContentLoaded", function () {
  var closeBtn = document.querySelector(".popup__close");
  var openBtn = document.querySelector("#openPopUp");
  var popup = document.querySelector(".popup-container");

  closeBtn.addEventListener("click", function () {
    popup.style.display = "none";
  });

  openBtn.addEventListener("click", function () {
    popup.style.display = "flex";
  });
});
