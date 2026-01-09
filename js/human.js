let state = "initial";
let startTime = 0;
let timeoutId = null;

const screen = document.getElementById("screen");
const text = document.getElementById("text");

function setScreen(color, message) {
    screen.style.background = color;
    text.textContent = message;
}

screen.addEventListener("click", function () {

    if (state === "initial") {
        state = "waiting";
        setScreen("#f0ad4e", "Espera el rojo...");

        let delay = Math.random() * 3000 + 2000;

        timeoutId = setTimeout(function () {
            state = "red";
            startTime = Date.now();
            setScreen("#d9534f", "¡CLICK!");
        }, delay);
    }

    else if (state === "waiting") {
        clearTimeout(timeoutId);
        state = "initial";
        setScreen("#000", "¡Demasiado pronto!\nHaz click para empezar");
    }

    else if (state === "red") {
        let reaction = Date.now() - startTime;
        state = "result";
        setScreen("#5cb85c", `Tu tiempo: ${reaction} ms\nHaz click para repetir`);
    }

    else if (state === "result") {
        state = "initial";
        setScreen("#2c7be5", "Haz click para empezar");
    }

});
