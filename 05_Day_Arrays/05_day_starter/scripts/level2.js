console.log("LEVEL 2");
// 01 Está na main
// 02
let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
reg = /([.,])/g;
words = text.replace(/[.,]/g, "").split(" ");

console.log(words);
console.log(words.length);

//03
const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
console.log(shoppingCart);

shoppingCart.indexOf("Meat") === -1 ? shoppingCart.unshift("Meat") : null;
console.log(shoppingCart);

shoppingCart.indexOf("Sugar") === -1 ? shoppingCart.push("Sugar") : null;
console.log(shoppingCart);

shoppingCart.splice(shoppingCart.indexOf("Honey"), 1);
console.log(shoppingCart);

shoppingCart.splice(shoppingCart.indexOf("Tea"), 1, "Green Tea");
console.log(shoppingCart);

//04
countries.indexOf("Ethiopia") === -1
  ? countries.push("Ethiopia")
  : console.log("ETHIOPIA");

//05 In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
webTechs.indexOf("Sass") === -1
  ? webTechs.push("Sass")
  : webTechs.log("Sass is a CSS preprocess");

//06
const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];

const fullStack = frontEnd.concat(backEnd);
const fullStack2 = [...frontEnd, ...backEnd]; //Assim também funciona :)
console.log(fullStack, fullStack2);
