console.log(countries);

// 1. Declare an _empty_ array;
let empty = [];

// 2. Declare an array with more than 5 number of elements
let fiveMore = [1, 2, 3, 4, 5, 6];

// 3. Find the length of your array
console.log(`Tamanho do array: ${fiveMore.length}`);

// 4. Get the first item, the middle item and the last item of the array
let itemLength = fiveMore.length;
let firstItem = fiveMore[0];
let middleItem = fiveMore[Math.floor(itemLength / 2)];
let lastItem = fiveMore[itemLength - 1];

// 5. Declare an array called _mixedDataTypes_, put different data types in the array and find the length of the array. The array size should  be greater than 5
let mixedDataTypes = [1, true, "three", 4, "5"];
console.log(`Tamanho do array misto: ${mixedDataTypes.length}`);
// 6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
// 7. Print the array using _console.log()_
console.log(itCompanies);
// 8. Print the number of companies in the array
console.log(itCompanies.length + 1);
// 9. Print the first company, middle and last company
let itLength = itCompanies.length;
let firstIt = itCompanies[0];
let middleIt = itCompanies[Math.floor(itLength / 2)];
let lastIt = itCompanies[itemLength - 1];
// 10. Print out each company
itCompanies.map((company) => console.log(company));
// 11. Change each company name  to uppercase one by one and print them out

// 12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
// 13. Check if a certain company exists in the itCompanies array. If it exist return the else return a company is _not found_
// 14. Filter out companies which have more than one 'o' without the filter method
// 15. Sort the array using _sort()_ method
// 16. Reverse the array using _reverse()_ method
// 17. Slice out the first 3 companies from the array
// 18. Slice out the last 3 companies from the array
// 19. Slice out the middle IT company or companies from the array
// 20. Remove the first IT company from the array
// 21. Remove the middle IT company or companies from the array
// 22. Remove the last IT company from the array
// 23. Remove all IT companies
