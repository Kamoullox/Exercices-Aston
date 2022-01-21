import isFizzBuzz from "./fizzbuzz.js";

let body = document.querySelector("body");
body.innerHTML += "<div class='card'>  <h2>1</h2> <p>...</p> <div class='buttonContainer'> <button class='minus'>-</button> <button class='plus'>+</button> </div> </div>";

document.querySelector(".minus").addEventListener('click', decrementNumber);
document.querySelector(".plus").addEventListener('click', incrementNumber);

/**
 * Decrement the number and display if it's fuzzBizz
 */
function decrementNumber() {
    let number = document.querySelector(".card h2");
    let fizzBuzzText = document.querySelector(".card p");

    if (number.textContent != "1") {
        let currentValue = parseInt(number.textContent);
        number.textContent = currentValue - 1;

        fizzBuzzText.textContent = isFizzBuzz(currentValue - 1);
    }
}

/**
 * Increment the number and display if it's fuzzBizz
 */
function incrementNumber() {
    console.log("Hello")
    let number = document.querySelector(".card h2");
    let fizzBuzzText = document.querySelector(".card p");

    let currentValue = parseInt(number.textContent);
    number.textContent = currentValue + 1;

    fizzBuzzText.textContent = isFizzBuzz(currentValue + 1);
}