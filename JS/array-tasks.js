const array = [0, 2, 3, 4, 0, 0, 5, 6, 0, 10, -7, 8];
console.log("Array: " + array);

//---------------1------------------
array.pop();
console.log("delete last:" + array);

array.shift();
console.log("delete first:" + array);

array.push(9);
console.log("add last:" + array);

array.unshift(1);
console.log("add first:" + array);

//-----------------2----------------
console.log(`size: ${array.length}`);

//-----------------3----------------
const arrCopy = [...array];
console.log("Copied array: " + arrCopy);

//----------------4-------------------
console.log("------------------------4---------------");
for (let i = 0; i < array.length; i += 2) {
  console.log(array[i]);
}

//----------------5-------------------
console.log("------------------------5---------------");
for (let i = 0; i < array.length; i++) {
  if (array[i] % 2 === 0) console.log(array[i]);
}

//----------------6-------------------
console.log("------------------------6---------------");
for (let i = 0; i < array.length; i++) {
  if (array[i] === 0) console.log(i);
}

//----------------7-------------------
console.log("------------------------7---------------");
accum = 0;
for (let i = 0; i < array.length; i++) {
  if (array[i] === 0) accum += 1;
}
console.log(accum);

//----------------8-------------------
console.log("------------------------8---------------");
const arrNotNull = array.filter((item) => item !== 0);
console.log("Not null array:     " + arrNotNull);

//-----------------9------------------
console.log("------------------------9---------------");

const arrHundred = array.map((item) => item / 100);
console.log("array / 100:     " + arrHundred);

//-----------------10------------------
console.log("------------------------10---------------");

array.forEach((item) => console.log(item ** 3));

//-----------------11------------------
console.log("------------------------11---------------");

const foundIndex = array.findIndex((item) => item ** 2 === 100);

foundIndex ? console.log(foundIndex) : "No found index";

//-----------------12------------------
console.log("------------------------12---------------");
const isDouble = array.every((element) => element % 2 === 0);
console.log("Is every element is double:   " + isDouble);

//-----------------13------------------
console.log("------------------------13---------------");

const isNegative = array.some((element) => element < 0);
console.log("Is some element is negative:   " + isNegative);
