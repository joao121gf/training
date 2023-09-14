window.addEventListener("load", function () {
  let amountNumbers = prompt("Type how many numbers you want to sum.");
  let numbers = 0;
  let array = [];
  let count = 0;

  while (numbers < amountNumbers) {
    let choiceNumbers = prompt(`Number ${numbers + 1} `);
    numbers += 1;
    array.push(parseFloat(choiceNumbers));
  }

  for (let c = 0; c < array.length; c++) {
    count += array[c];
  }
  console.log(`the sum of values is ${count}`);
});
