const pLocation = document.querySelector("#location");
const imgCity = document.querySelector("#img");
const btnNext = document.querySelector("#btnNext");
const btnPrevious = document.querySelector("#btnPrevious");
const weather = "https://api.meteomatics.com/2023-07-05T00:00:00Z/t_2m:C/52.520551,13.461804/html";
fetch(weather, {
    method: "GET",
}).then((res) => {
    res.json().then((dados) => {
        console.log(dados);
    });
});
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
