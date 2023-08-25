const quotes = [
    {
        quote: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "Winston Churchill"
    },
    {
        quote: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        quote: "Strive not to be a success, but rather to be of value.",
        author: "Albert Einstein"
    },
    {
        quote: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt"
    },
    {
        quote: "Do not wait for leaders; do it alone, person to person.",
        author: "Mother Teresa"
    },
    {
        quote: "In the middle of every difficulty lies opportunity.",
        author: "Albert Einstein"
    },
    {
        quote: "Your time is limited, don't waste it living someone else's life.",
        author: "Steve Jobs"
    },
    {
        quote: "Don't watch the clock; do what it does. Keep going.",
        author: "Sam Levenson"
    },
    {
        quote: "Success usually comes to those who are too busy to be looking for it.",
        author: "Henry David Thoreau"
    },
    {
        quote: "The future depends on what you do today.",
        author: "Mahatma Ghandi"
    },
];

let index = -1;
var textOutput = document.getElementById("text-output");
var authorOutput = document.getElementById("author-output");

generateQuote(index);
function generateQuote(index) {
    let newIndex = index;
    while (newIndex == index){
        newIndex = Math.floor(Math.random() * quotes.length);
        if (newIndex != index) {
            index = newIndex;
            textOutput.textContent = quotes[index].quote;
            authorOutput.textContent = quotes[index].author;
            return newIndex;
        } else continue;
    }
}


