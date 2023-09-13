const inpAsk = document.querySelector(".inp-ask");

const btnSub = document.querySelector(".inp-resp");
const btnView = document.querySelector(".inp-view");
const btnClose = document.querySelector(".arrow");

const containerResults = document.querySelector(".container-results");

const listData = document.querySelectorAll(".datas li");



let emptyList = [];

function colectData() {
  let dataAsk = inpAsk.value;
  let newDiv = document.createElement("li");
  newDiv.textContent = dataAsk;
  let latestDatas = document.querySelector(".datas:last-child");
  let icon = document.createElement("img");
  icon.src = "elements/lixo.png";
  icon.alt = "Ícone";
  icon.classList.add('delete')
  newDiv.appendChild(icon);


  latestDatas.insertBefore(newDiv, latestDatas.firstChild);


  

  //   emptyList.push(dataAsk);
}
btnSub.addEventListener("click", colectData);

function viewData() {
  containerResults.style.display = "block";
}
btnView.addEventListener("click", viewData);

function closeData() {
  containerResults.style.display = "none";
}
btnClose.addEventListener("click", closeData);
