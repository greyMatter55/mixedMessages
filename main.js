//Code to generate a random greating upon refresh

//Array of things to say
let msgArry = [
    "How is your day today?",
    "How's everything going?",
    "I hope you've had a pleasant day so far",
    "Good day",
    "What's new in your world?",
    "How are you?",
    "What a wonderful day to get things done!",
    "Hello there, ready to be awesome today?",
    "Hi! I'm glad to see you",
    "Well hello there! Ready to get things done today?"
];

//console.log(msgArry[2]);

const outputNum = Math.floor(Math.random()*9);

console.log(msgArry[outputNum]);