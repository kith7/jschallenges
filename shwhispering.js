/* Whispering function 
Write a function `whisper` that takes in a sentence 
and returns a new sentence in all lowercase letters with
"shh..." at the beginning. 

The function should also remove an exclamation point
at the end of the sentence, if there is one. 

Example 
input: "The KITTENS are SLEEPING!"
output: "shh... the kittens are sleeping"

*/

function whisper(str) {
  let newStr = `shh... ${str.toLowerCase()}`;
  if (newStr.endsWith("!")) {
    return newStr.slice(0, -1);
  }
  return newStr;
}

console.log(whisper("PLEASE STOP SHOUTING!!!!"));
// remember that if you want to e.g. remove all the exclamation marks
//you can use the replace method
//console.log(str.replace(/"!'/g, ''));
