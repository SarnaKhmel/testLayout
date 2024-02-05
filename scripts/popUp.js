document.addEventListener("DOMContentLoaded", function () {
  const closeBtn = document.querySelector(".popup__close");
  const openBtn = document.querySelector("#openPopUp");
  const popup = document.querySelector(".popup-container");

  closeBtn.addEventListener("click", function () {
    popup.style.display = "none";
  });

  openBtn.addEventListener("click", function () {
    popup.style.display = "flex";
  });
});
