let age = document.querySelector(".input");
let resp = document.querySelector(".resp");
let button = document.querySelector(".sub");
// resp.innerHTML = 'po'

function callResp() {
  let value = age.value;

  if (!/^\d+(\.\d+)?$/.test(value)) {
    resp.innerHTML = "Type a valid number";
    resp.style.display = "block";
  } else {
    value = parseFloat(age.value);

    if (!isNaN(value)) {
      if (value >= 18 && value < 120) {
        resp.innerHTML = "Adult";
        resp.style.display = "block";
      } else if (value > 0 && value < 18) {
        resp.innerHTML = "Children";
        resp.style.display = "block";
      } else {
        resp.innerHTML = "Type a valid number";
        resp.style.display = "block";
      }
    }
  }
}

document.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    const btn = document.querySelector(".sub");
    btn.click();
  }
});
button.addEventListener("click", callResp);
