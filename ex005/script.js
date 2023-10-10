window.addEventListener("load", function () {
  const btnLeft = document.querySelector(".left");
  const btnRight = document.querySelector(".right");
  const imgContainer = document.querySelector(".disk");
  let currentPosition = 0;
  const lastImg = document.querySelector(".last");

  function getPositionToBody(element) {
    const rect = element.getBoundingClientRect();
    return {
      top: rect.top + window.scrollY,
      left: rect.left + window.scrollX,
    };
  }

  function moveLeft() {
    currentPosition += 300;
    imgContainer.style.transform = `translateX(${currentPosition}px)`;
    const positionToBody = getPositionToBody(lastImg);
    console.log(positionToBody.left);
    if (positionToBody.left >= 1196) {
      btnRight.style.display = "initial";
    }
    if (positionToBody.left >= 4930){
      btnLeft.style.display = "none";
    }
  }

  function moveRight() {
    currentPosition -= 300;
    imgContainer.style.transform = `translateX(${currentPosition}px)`;
    const positionToBody = getPositionToBody(lastImg);
    console.log(positionToBody.left);

    if (positionToBody.left <= 1596) {
      btnRight.style.display = "none";
    }
    if (positionToBody.left <= 5361){
      btnLeft.style.display = "initial";
    }
  }

  btnLeft.addEventListener("click", moveLeft);
  btnRight.addEventListener("click", moveRight);
});
