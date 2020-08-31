console.log("En el Random Quotes");

let button;
button = document.getElementById("generate-button");

function getQuote() {
    console.log("Click me");
}
button.addEventListener("click", getQuote, false);