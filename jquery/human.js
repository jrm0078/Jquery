$(document).ready(function () {

    let state = "initial";
    let startTime = 0;
    let timeoutId = null;

    function setScreen(color, text) {
        $("#screen").css("background", color);
        $("#text").text(text);
    }

    $("#screen").click(function () {

        // Estado 1 → inicial
        if (state === "initial") {
            state = "waiting";
            setScreen("#f0ad4e", "Espera el rojo...");

            let delay = Math.random() * 3000 + 2000; // 2 a 5 segundos

            timeoutId = setTimeout(function () {
                state = "red";
                startTime = Date.now();
                setScreen("#d9534f", "¡CLICK!");
            }, delay);
        }

        // Pulsó antes de tiempo
        else if (state === "waiting") {
            clearTimeout(timeoutId);
            state = "initial";
            setScreen("#000", "¡Demasiado pronto!\nHaz click para empezar");
        }

        // Pulsó en rojo (medimos tiempo)
        else if (state === "red") {
            let reaction = Date.now() - startTime;
            state = "result";
            setScreen("#5cb85c", `Tu tiempo: ${reaction} ms\nHaz click para repetir`);
        }

        // Estado resultado → volver a empezar
        else if (state === "result") {
            state = "initial";
            setScreen("#2c7be5", "Haz click para empezar");
        }

    });

});
