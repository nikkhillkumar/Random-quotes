const generateQuoteButton = document.getElementById("generate-quote-button");
const quoteDisplay = document.getElementById("quote");

// Using Fetch API
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

});
