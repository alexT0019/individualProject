//Random Quote
//Creating variables for elements from other pages
const randomQuoteContainer = document.querySelector(".randomQuoteContainer");
const randomQuote = document.querySelector(".randomQuoteH1");

//Creating an array storing random quotes
const randomQuoteArr = [
    `You don't need to be perfect to be loved.`,
    `Accept and embrace all feelings you have.`,
    `Love yourself.`,
    `Everyone deserves to get some rest.`,
    `You did well.`,
    `It's never to late to start.`,
    `You are good enough.`,
    `Be yourself.`,
    `Never underestimate your power.`,
    `Everyone deserves to be loved.`
];

//Adding event listener
randomQuoteContainer.addEventListener("click", () => {
    let randomIndex = Math.floor(Math.random() * randomQuoteArr.length);
    randomQuote.innerHTML = randomQuoteArr[randomIndex];
});