import isFizzBuzz from "../scripts/fizzbuzz.js";

let body = document.querySelector("body");
let ul = document.createElement('ul');

body.append(ul);

/**
 * Display if all numbers 1 to 100 is fizz, buzz or fizzbuz on a container div
 */
function displayFizzBuzz() {    
    for (let i = 1; i <= 100; i++){
        let li = document.createElement('li');
        li.textContent = `${i} : ${isFizzBuzz(i)}`;
        ul.append(li);
    }
}

displayFizzBuzz();