window.addEventListener("load", function () {
  const btnLeft = document.querySelector(".left");
  const btnRight = document.querySelector(".right");
  const imgContainer = document.querySelector(".disk");
  const carrossel = document.querySelector(".carrossel");

  let currentPosition = 0;

  function updateArrowVisibility() {
    const containerWidth = imgContainer.clientWidth;
    const carrosselWidth = carrossel.clientWidth;

    if (currentPosition >= 0) {
      btnLeft.style.display = "none";
    } else {
      btnLeft.style.display = "block";
    }

    if (currentPosition <= carrosselWidth - containerWidth) {
      btnRight.style.display = "none";
    } else {
      btnRight.style.display = "block";
    }
  }

  function moveLeft() {
    currentPosition += 300;
    imgContainer.style.transform = `translateX(${currentPosition}px)`;
    updateArrowVisibility();
  }

  function moveRight() {
    currentPosition -= 300;
    imgContainer.style.transform = `translateX(${currentPosition}px)`;
    updateArrowVisibility();
  }

  btnLeft.addEventListener("click", moveLeft);
  btnRight.addEventListener("click", moveRight);

  updateArrowVisibility();
});
