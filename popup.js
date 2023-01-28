// popup.js
const generateQuoteButton = document.getElementById("generate-quote-button");
const quoteDisplay = document.getElementById("quote");

// an example of quotes

generateQuoteButton.addEventListener("click", () => {
  fetch("https://quotable.io/random")
    .then((response) => response.json())
    .then((data) => {
      // do something with the data
      quoteDisplay.innerHTML = `"${data.content}"`;
    })
    .catch((error) => {
      console.log("Error:", error);
    });

  // generate a random number between 0 and the last index of quotes array

});
