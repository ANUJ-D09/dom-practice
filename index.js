//variables
let button = document.querySelector("#nq");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

const quotes = [
    { quote: "wessssfsf", person: "Anuj" },
    { quote: "The only limit to our realization of tomorrow is our doubts of today.", person: "Franklin D. Roosevelt" },
    { quote: "Do not watch the clock. Do what it does. Keep going.", person: "Sam Levenson" },
    { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", person: "Winston Churchill" },
    { quote: "Believe you can and you're halfway there.", person: "Theodore Roosevelt" },
    { quote: "What you get by achieving your goals is not as important as what you become by achieving your goals.", person: "Zig Ziglar" },
    { quote: "It always seems impossible until it's done.", person: "Nelson Mandela" },
    { quote: "Life is 10% what happens to us and 90% how we react to it.", person: "Charles R. Swindoll" },
    { quote: "The future belongs to those who believe in the beauty of their dreams.", person: "Eleanor Roosevelt" },
    { quote: "Don't watch the clock; do what it does. Keep going.", person: "Sam Levenson" },
    { quote: "Act as if what you do makes a difference. It does.", person: "William James" },
    { quote: "You miss 100% of the shots you don’t take.", person: "Wayne Gretzky" },
    { quote: "Whether you think you can or you think you can’t, you’re right.", person: "Henry Ford" },
    { quote: "It does not matter how slowly you go as long as you do not stop.", person: "Confucius" },
    { quote: "Opportunities don't happen. You create them.", person: "Chris Grosser" },
    { quote: "Your time is limited, don't waste it living someone else's life.", person: "Steve Jobs" },
    { quote: "Hardships often prepare ordinary people for an extraordinary destiny.", person: "C.S. Lewis" }
];
button.addEventListener('click', function() {
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;

})