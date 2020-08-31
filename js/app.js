console.log("En el Random Quotes");

let button, quote, author;
const url = "https://type.fit/api/quotes";
button = document.getElementById("generate-button");
quote = document.getElementById("quote-display");
author = document.getElementById("author");

(function () {
    fetch(url)
        .then(response => response.json())
        .then(function (data) {
            console.log(data);
            button.addEventListener("click", function () {
                var quotes = data;
                let random = Math.floor(Math.random() * quotes.length);
                console.log(random);

                quote.textContent = quotes[random].text;
                author.textContent = quotes[random].author;
            })
        })
        .catch(error => console.log("Unable to get items" + error));
})();