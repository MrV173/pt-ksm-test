const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Masukkan angka: ", (input) => {
  const number = parseInt(input);

  if (isNaN(number)) {
    console.log("Input yang Anda masukkan bukan angka.");
  } else {
    for (let i = 1; i <= number; i++) {
      let output = "";
      if (i % 3 === 0) output += "Fizz";
      if (i % 5 === 0) output += "Buzz";
      console.log(output || i);
    }
  }

  rl.close();
});
