console.log("Random Quotes");

let button, quote, author;
const url = "https://type.fit/api/quotes";
button = document.getElementById("generate-button");
quote = document.getElementById("quote-display");
author = document.getElementById("author");

//IIFE
(function () {
    // Fetch API quotes
    fetch(url)
        .then(response => response.json())
        .then(function (data) {
            // sets up a function that will be called when the specified event is delivered to target
            button.addEventListener("click", function () {
                var quotes = data;
                // create a random number every time the user clicks the button
                // calling Math.Floor() with Math.random passes as a parameter
                let random = Math.floor(Math.random() * quotes.length);

                // We use a random number to retrieve a quote from the array and place it into HTML
                quote.textContent = quotes[random].text;
                author.textContent = quotes[random].author;
            })
        })
        .catch(error => console.log("Unable to get items" + error));
})();