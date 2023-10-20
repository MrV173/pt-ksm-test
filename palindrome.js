const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function isPalindrome(str) {
  const cleanStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  const reversedStr = cleanStr.split("").reverse().join("");
  return cleanStr === reversedStr;
}

rl.question("Masukkan sebuah string: ", (input) => {
  const result = isPalindrome(input) ? "adalah palindrome" : "bukan palindrome";
  console.log(`"${input}" ${result}`);
  rl.close();
});
