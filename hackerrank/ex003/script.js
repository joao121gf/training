const n = 123;
const nStr = String(n);
const nStrArray = nStr.split("");
let sum = 0

function sumNumbers() {
  nStrArray.forEach((nums) => {
    sum += parseInt(nums);
    return sum
  });
  console.log(sum)
}
sumNumbers()