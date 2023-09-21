const red = document.querySelector(".vermelho");
const yellow = document.querySelector(".amarelo");
const blue = document.querySelector("blue");

const colors = document.querySelectorAll(".colors *");

colors.forEach((c) => {
  let allActive = true;
  function activeBtn() {
    c.classList.toggle("active");
    if (!c.classList.contains("active")) {
      allActive = false;
      console.log('s')
    }else{
      allActive = true;
      console.log('n')


    }
  }

  c.addEventListener("click", activeBtn);
});
