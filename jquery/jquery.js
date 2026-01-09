$(document).ready(function () {

    let currentColor = $("#colorPicker").val();

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

    // Devuelve una imagen al azar
    function randomImage() {
        return images[Math.floor(Math.random() * images.length)];
    }

    // Crea una tarjeta nueva
    function createCard() {
        let card = $(`
            <div class="card">
                <img src="${randomImage()}">
                <button class="change">Cambiar</button>
                <button class="delete">Borrar</button>
            </div>
        `);

        card.css("background", currentColor);
        return card;
    }

    // Crear 3 tarjetas iniciales
    function init() {
        $("#container").empty();
        for (let i = 0; i < 3; i++) {
            $("#container").append(createCard());
        }
    }

    init();

    // Cuando cambia el selector de color
    $("#colorPicker").on("input", function () {
        currentColor = this.value;
    });

    // Cambiar color de fondo
    $("#changeColor").click(function () {
        $("body").css("background", currentColor);
        $(".card").css("background", currentColor);
        $("button").css("background", currentColor);
    });

    // Añadir tarjeta
    $("#add").click(function () {
        $("#container").append(createCard());
    });

    // Cambiar imagen (delegado)
    $("#container").on("click", ".change", function () {
        $(this).closest(".card").find("img").attr("src", randomImage());
    });

    // Borrar tarjeta (delegado)
    $("#container").on("click", ".delete", function () {
        $(this).closest(".card").remove();
    });

    // Reset
    $("#reset").click(function () {
        currentColor = "#888888";
        $("#colorPicker").val(currentColor);
        $("body").css("background", currentColor);
        init();
    });

});
