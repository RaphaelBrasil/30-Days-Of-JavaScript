// The following is an array of 10 students ages:
let ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort();
let minAge = ages[0];
ages.reverse();
let maxAge = ages[0];
console.log(`Idade minima: ${minAge}`);
console.log(`Idade máxima: ${maxAge}`);

let medAge = 0;
let avgAge = 0;
ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
const agesLen = ages.length;
const midLen = agesLen / 2;
agesLen % 2 === 0
  ? (medAge = ages.slice(midLen - 1, midLen + 1))
  : (medAge = ages.slice(midLen - 1, midLen));

ages.map((age) => (avgAge += age));
avgAge = avgAge / agesLen;
console.log(`Idade do meio: ${medAge}`);
console.log(`Idade media:${avgAge}`);
console.log(midLen);
// (min - average) and (max - average),
console.log(Math.abs(minAge - avgAge));
console.log(Math.abs(maxAge - avgAge));

//1. Slice the first ten countries from the countries array
let slcCon = countries.slice(0, 10);
const conLen = countries.length;
const midLenCon = conLen / 2;
console.log(`Paises: ${slcCon}, Tamanho: ${slcCon.length}`);

//2. Find the middle country(ies) in the countries array
let medCon = [];
conLen % 2 === 0
  ? (medCon = countries.slice(midLenCon - 1, midLenCon + 1))
  : (medCon = countries.slice(midLenCon - 1, midLenCon));
console.log(`Middle country: ${medCon}`);
//3. Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
let firstsCon = [];
let lastsCon = [];

if (conLen % 2 === 0) {
  console.log("É PAR");
  firstsCon = countries.slice(0, midLenCon - 1);
  lastsCon = countries.slice(midLenCon, conLen - 1);
} else {
  console.log("É IMPAR");
  let middleLen = Math.floor(midLenCon);
  firstsCon = countries.slice(0, middleLen - 1);
  lastsCon = countries.slice(middleLen, conLen - 1);
  firstsCon.push("Gotham");
}
console.log(`First countries: ${firstsCon.length}`);
console.log(`Last countries: ${lastsCon.length}`);
