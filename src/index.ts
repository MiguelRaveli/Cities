const pLocation = document.querySelector("#location") as HTMLDivElement;
const imgCity = document.querySelector("#img") as HTMLDivElement;
const btnNext = document.querySelector("#btnNext") as HTMLButtonElement;
const btnPrevious = document.querySelector("#btnPrevious") as HTMLButtonElement;
type city = {
  location: string;
  image: string;
};

var index = 0;
btnNext.onclick = () => {
  if (index !== 3) {
    index += 1;
    fetchCity();
  }
};
btnPrevious.onclick = () => {
  if (index !== 0) {
    index -= 1;
    fetchCity();
  }
};
const endpoint = "http://localhost:3333/cities";
const fetchCity = () => {
  fetch(endpoint).then((res) => {
    res.json().then((dados) => {
      if (index > -1) {
        pLocation.innerHTML = "";
        pLocation.append(dados[index].location);
        const image = dados[index].image;
        imgCity.setAttribute("style", `background-image: url(${image})`);
      }
    });
  });
};

window.onload = () => {
  fetchCity();
};
