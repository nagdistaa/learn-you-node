
let sum = 0;
const prolength = process.argv.length;

for (let i = 2; i < prolength; i++) {
  sum = sum + Number(process.argv[i]);
}
console.log(sum);
