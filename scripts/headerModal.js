document.addEventListener("DOMContentLoaded", function () {
  const flagIcon = document.querySelector(".responsive-flag");
  const modal = document.getElementById("modal");

  flagIcon.addEventListener("click", function () {
    modal.style.display = "flex";
  });

  modal.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});
