const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const colors = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];

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
