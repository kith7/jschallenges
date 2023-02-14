/* Panic function 
Write a PANIC! function. The function should take in a sentence and return the same
sentence in all caps with an exclamation point (!) at the end. Use JavaScript's
built in string methods. 

If the string is a phrase or sentence, add a 😱 emoji in between each word. 

Example input: "Hello"
Example output: "HELLO!"

Example input: "I'm almost out of coffee"
Example output: "I'M 😱 ALMOST 😱 OUT 😱 OF 😱 COFFEE!"
*/

// Test your function
// console.log(panic("I'm almost out of coffee"));
// console.log(panic("winter is coming"))

const panicFunc = (str) => {
  let panicked = str.toUpperCase().split(" ");
  if (panicked.length > 1) {
    panicked = panicked.join(" 😱 ");
    return (panicked = panicked + "!");
  }
  return (panicked = panicked + "!");
};
console.log(panicFunc("done"));

//Shorter solution

function panicFunc(str) {
  return str.split(" ").join(" 😱 ").toUpperCase() + "!";
}
