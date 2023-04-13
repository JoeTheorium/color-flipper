const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const colors = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];

btn.addEventListener("click", () => {
    const randomColor = generateRandomColor();

    document.body.style.backgroundColor = randomColor;
    color.textContent = randomColor;
});

function generateRandomColor() {
    let randomColor = "#";
    for (let i = 0; i < 6; i++) {
        randomColor += colors[Math.floor(Math.random() * colors.length)];
    }
    return randomColor;
}

const span = document.querySelector(".color");

span.addEventListener("mouseover", () => {
    span.style.color = document.body.style.backgroundColor;
});

span.addEventListener("mouseout", () => {
    span.style.color = "#fff";
});

/*
// HACER QUE QUEDE EL COLOR INVERTIDO EN EL "background-color" del "h2"

const body = document.body;
const h2 = document.querySelector("h2");

btn.addEventListener("click", () => {
    const randomColor = generateRandomColor();

    body.style.backgroundColor = randomColor;
    color.textContent = randomColor;

    // Obtener el valor actual del background-color
    const bgColor = getComputedStyle(body).backgroundColor;

    // Convertir el valor del background-color a un valor RGB
    const rgbValue = bgColor.match(/\d+/g);

    // Invertir el valor RGB
    const invertedRgbValue = rgbValue.map(val => 255 - val);

    // Crear el valor CSS para el color invertido
    const invertedColor = "rgb(" + invertedRgbValue.join(",") + ")";

    // Establecer el color del texto en el h2 al color invertido
    h2.style.backgroundColor = invertedColor;
});
*/