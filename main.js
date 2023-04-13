// Obtener elementos del DOM
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const body = document.querySelector("body");

// Colores en formato hexadecimal
const colors = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];

// Función para generar un color aleatorio
function generateRandomColor() {
let randomColor = "#";
for (let i = 0; i < 6; i++) {
randomColor += colors[Math.floor(Math.random() * colors.length)];
}
return randomColor;
}

// Función para obtener el color de fondo actual del cuerpo de la página
function getBodyBackgroundColor() {
return window.getComputedStyle(body).getPropertyValue("background-color");
}

// Función para cambiar el color de fondo y el texto al hacer click en el botón
function changeBackgroundColor() {
const randomColor = generateRandomColor();
body.style.backgroundColor = randomColor;
color.textContent = randomColor;
}

// Función para cambiar el color de fondo del botón al pasar el mouse sobre él
function changeButtonHoverColor() {
const bodyBackgroundColor = getBodyBackgroundColor();
btn.style.backgroundColor = bodyBackgroundColor;
btn.style.color = "#fff";
}

// Evento click en el botón
btn.addEventListener("click", changeBackgroundColor);

// Eventos mouseover y mouseout en el código de color
color.addEventListener("mouseover", () => {
color.style.color = body.style.backgroundColor;
});

color.addEventListener("mouseout", () => {
color.style.color = "#fff";
});

// Evento mouseover en el botón
btn.addEventListener("mouseover", changeButtonHoverColor);

// Evento DOMSubtreeModified en el cuerpo de la página
body.addEventListener("DOMSubtreeModified", changeButtonHoverColor);


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