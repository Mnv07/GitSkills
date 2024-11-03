const prompt = require('prompt-sync')();  

function helloWorld() {
    console.log("Hello, world!");
}

function greetUser(name) {
    console.log(`Hello, ${name}!`);
}

helloWorld();  

const name = prompt("Enter your name: "); 
greetUser(name); 
