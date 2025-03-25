
function createCard(img , number, titre, rank, description, ) {
    const card = document.createElement("section");
    const glob1Div = document.createElement("div");
    const tt1Div = document.createElement("div");
    const tt2Div = document.createElement("div");
    const tt3Div = document.createElement("div");
    const p2P = document.createElement("h2");
    const p3P = document.createElement("h2");
    const p4P = document.createElement("div");
    const img1I = document.createElement("img");
    const rectangle2Div = document.createElement("div");
    const p5P = document.createElement("p");

    card.classList.add("rectangle");
    glob1Div.classList.add("glob1");
    tt1Div.classList.add("tt1");
    tt2Div.classList.add("tt2");
    tt3Div.classList.add("tt3");
    p2P.classList.add("p2");
    p3P.classList.add("p3");
    p4P.classList.add("p4");
    img1I.classList.add("img1");
    rectangle2Div.classList.add("rectangle2");
    p5P.classList.add("p5");

    card.appendChild(glob1Div);

    glob1Div.appendChild(tt1Div);
    glob1Div.appendChild(tt2Div);
    glob1Div.appendChild(tt3Div);
    glob1Div.appendChild(rectangle2Div);
    glob1Div.appendChild(img1I);

    tt1Div.appendChild(p2P);
    tt2Div.appendChild(p3P);
    tt3Div.appendChild(p4P);

    rectangle2Div.appendChild(p5P);

    p2P.textContent = number;
    p3P.textContent = titre;
    p4P.textContent = rank;
    img1I.setAttribute("src", img);
    p5P.textContent = description;


    return card;
}















const number = document.querySelector(".number")
const titre = document.querySelector(".titre")
const rarete = document.querySelector(".rarete")

let cardA = {
    number : 1039,
    titre : "ACCOMPANY",
    rarete : "F-130",
}

number.textContent = cardA.number;
titre.textContent = cardA.titre
rarete.textContent = cardA.rarete

