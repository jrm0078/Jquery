let currentColor = "#888888";

let images = [
    "../img/cat1.png",
    "../img/cat2.png",
    "../img/cat3.png",
    "../img/cat4.png",
    "../img/cat5.png",
    "../img/cat6.png",
    "../img/cat7.png",
    "../img/cat8.png",
    "../img/cat9.png",
    "../img/cat10.png",
    "../img/cat11.png",
    "../img/cat12.png"
];

const container = document.getElementById("container");
const colorPicker = document.getElementById("colorPicker");
const addBtn = document.getElementById("add");
const changeColorBtn = document.getElementById("changeColor");
const resetBtn = document.getElementById("reset");

function randomImage() {
    return images[Math.floor(Math.random() * images.length)];
}

function createCard() {
    const card = document.createElement("div");
    card.classList.add("card");
    card.style.background = currentColor;

    const img = document.createElement("img");
    img.src = randomImage();

    const changeBtn = document.createElement("button");
    changeBtn.textContent = "Cambiar";
    changeBtn.classList.add("change");

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Borrar";
    deleteBtn.classList.add("delete");

    changeBtn.addEventListener("click", function () {
        img.src = randomImage();
    });

    deleteBtn.addEventListener("click", function () {
        card.remove();
    });

    card.appendChild(img);
    card.appendChild(changeBtn);
    card.appendChild(deleteBtn);

    return card;
}

function init() {
    container.innerHTML = "";
    for (let i = 0; i < 3; i++) {
        container.appendChild(createCard());
    }
}

init();

colorPicker.addEventListener("input", function () {
    currentColor = this.value;
});

changeColorBtn.addEventListener("click", function () {
    document.body.style.background = currentColor;
    document.querySelectorAll(".card").forEach(card => {
        card.style.background = currentColor;
    });
    document.querySelectorAll("button").forEach(btn => {
        btn.style.background = currentColor;
    });
});

addBtn.addEventListener("click", function () {
    container.appendChild(createCard());
});

resetBtn.addEventListener("click", function () {
    currentColor = "#888888";
    colorPicker.value = currentColor;
    document.body.style.background = currentColor;
    init();
});
