/**
 * Check if number is Fizz, Buzz, FizzBuzz or nothing
 * @param  {int} number 
 * @return {string} Return Fizz, Bizz, FIZZBUZZ or ...
 */

export default function isFizzBuzz(number) {
    if (number % 3 == 0 && number % 5 == 0) {
        return "FIZZBUZZ"
    }
    else if (number % 3 == 0) {
        return "FIZZ"
    }
    else if (number % 5 == 0) {
        return "BUZZ"
    }
    else {
        return "..."
    }
}