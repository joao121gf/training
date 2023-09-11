const frase = document.querySelector(".ask");
const button = document.querySelector(".button");
const resp = document.querySelector(".resp");

function showResp() {
  let valor = frase.value.toLowerCase();

  let c = valor.length - 1;
  let d = 0;
  let ver = 0;
  for (valor.length; c >= 0; c-- && d++) {
    if (valor[c] == valor[d]) {
      ver += 1;
    }
  }
  if (ver == valor.length) {
    resp.innerHTML = "Palíndromes";
    resp.style.display = "block";
  } else {
    resp.innerHTML = "Normal";
    resp.style.display = "block";
  }
}

button.addEventListener("click", showResp);

document.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    const btn = document.querySelector(".button");
    btn.click();
  }
});
