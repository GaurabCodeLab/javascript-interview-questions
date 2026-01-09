// Function to find out even or odd number:-
const isEven = (num) => {
  if (typeof num !== "number" || num < 1) {
    return "provide number greater than 0";
  } else {
    return num % 2 === 0 ? "Even Number" : "Odd Number";
  }
};

// console.log(isEven(1));

// Function to find out sum of n natural number:-
const sumFunc = (n) => {
  if (typeof n !== "number" || n < 1) {
    return "provide correct number";
  } else {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    return sum;
  }
};

// console.log(sumFunc(5));

// Factorial of a number
const factFunc = (n) => {
  if (typeof n !== "number" || n < 0) {
    return "provide correct number";
  } else if (n === 0 || n === 1) {
    return 1;
  } else {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
      fact *= i;
    }
    return fact;
  }
};

// console.log(factFunc(""));

// reverse a string:-
const reverseStrFunc = (str) => {
  if (typeof str !== "string" || !str.trim()) {
    return "provide correct string";
  } else {
    let reversedStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
      reversedStr += str[i];
    }
    return reversedStr;
  }
};

// console.log(reverseStrFunc("rama"));
// console.log("rama".split("").reverse().join(""));

// function to reverse a sentence:-
const reversedSentenceFunc = (sentence) => {
  if (typeof sentence !== "string" || !sentence.trim()) {
    return "provide correct string";
  } else {
    let wordsArray = [];
    let word = "";
    let reversedSentence = "";
    for (let i = 0; i < sentence.length; i++) {
      if (sentence[i] === " ") {
        wordsArray.push(word);
        word = "";
      } else {
        word += sentence[i];
      }
    }
    wordsArray.push(word);
    for (let j = wordsArray.length - 1; j >= 0; j--) {
      reversedSentence += wordsArray[j];
      if (j !== 0) {
        reversedSentence += " ";
      }
    }
    return reversedSentence;
  }
};

// console.log(reversedSentenceFunc("i am a good boy"));
// console.log("i am a good boy".split(" ").reverse().join(" "));

// sum of numbers in an array:-
const arr = [1, 2, 3, 4, 5, 12];
const sumArray = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

// console.log(sumArray(arr));
// console.log(arr.reduce((acc, curr) => acc + curr));

// Function to find maximum value in an array:-
const maxArrayFunc = (arr) => {
  if (Array.isArray(arr)) {
    let maxValue = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > maxValue) {
        maxValue = arr[i];
      }
    }
    return maxValue;
  } else {
    return "Provide correct array";
  }
};

// console.log(maxArrayFunc(arr));
// console.log(arr.reduce((acc, curr) => (acc > curr ? acc : curr)));
// console.log(Math.max(...arr));
// console.log(Math.max.apply(null, arr));

// Function to find minimum value in array:-
const minArrayFunc = (arr) => {
  if (Array.isArray(arr)) {
    let minValue = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < minValue) {
        minValue = arr[i];
      }
    }
    return minValue;
  } else {
    return "provide correct array";
  }
};
// console.log(minArrayFunc(arr));
// console.log(arr.reduce((acc, curr) => (acc < curr ? acc : curr)));
// console.log(Math.min(...arr));
// console.log(Math.min.apply(null, arr));

// Function to find out duplicate values in an array:-
const arrdup = [2, 2, 5, 6, 7, 6, 4, 7, 7];
const duplicateValueFunc = (arr) => {
  if (Array.isArray(arr)) {
    const duplicateValue = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j] && !duplicateValue.includes(arr[i])) {
          duplicateValue.push(arr[i]);
        }
      }
    }
    return duplicateValue;
  } else {
    return "provide correct array";
  }
};

// console.log(duplicateValueFunc(arrdup));
// console.log(
//   arrdup.filter(
//     (value, index) =>
//       arrdup.indexOf(value) !== index && arrdup.lastIndexOf(value) === index
//   )
// );

// Funtion to findout unique values in an array:-
const uniqueArrayFunc = (arr) => {
  if (Array.isArray(arr)) {
    const uniqueArray = [];
    for (let i = 0; i < arr.length; i++) {
      if (!uniqueArray.includes(arr[i])) {
        uniqueArray.push(arr[i]);
      }
    }
    return uniqueArray;
  } else {
    return "provide correct array";
  }
};

// console.log(uniqueArrayFunc(arrdup));
// console.log(arrdup.filter((value, index) => arrdup.indexOf(value) === index));

const uniqueValueFunc = (arr) => {
  if (Array.isArray(arr)) {
    const uniqueArray = [];
    for (let i = 0; i < arr.length; i++) {
      let counter = 0;
      for (let j = 0; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
          counter++;
        }
      }
      if (counter === 1) {
        uniqueArray.push(arr[i]);
      }
    }
    return uniqueArray;
  } else {
    return "provide correct array";
  }
};

// console.log(uniqueValueFunc(arrdup));
// console.log(
//   arrdup.filter(
//     (value, index) =>
//       arrdup.indexOf(value) === index && arrdup.lastIndexOf(value) === index
//   )
// );

// Function to flat an array:-
const flatArray = [1, 2, [3, 4, 5], 6, [7, 8], 9, [10]];
const flatArrayFunc = (arr) => {
  if (Array.isArray(arr)) {
    let flaternArray = [];
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        flaternArray = flaternArray.concat(arr[i]);
      } else {
        flaternArray.push(arr[i]);
      }
    }
    return flaternArray;
  } else {
    return "provide correct array";
  }
};

// console.log(flatArrayFunc(flatArray));
// console.log(flatArray.flat());
// console.log(flatArray.flat(1));
// console.log(flatArray.flat(2));
// console.log(flatArray.flat(Infinity));

// Function to flat deeply nested array:-
const deeplyNestedArray = [
  1,
  [2, 3, [4, 5]],
  6,
  7,
  [8, 9],
  10,
  [11, 12, [13, 14, [15, 16]]],
];
let flaternArray = [];
const flatDeeplyNestedArrayFunc = (arr) => {
  if (Array.isArray(arr)) {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        flatDeeplyNestedArrayFunc(arr[i]);
      } else {
        flaternArray.push(arr[i]);
      }
    }
    return flaternArray;
  } else {
    return "provide correct array";
  }
};

// console.log(flatDeeplyNestedArrayFunc(deeplyNestedArray));
// console.log(deeplyNestedArray.flat(Infinity));

// Function to find fibonachi series:-
const fibonachiFunc = (n) => {
  const fibonachi = [];
  for (let i = 1; i <= n; i++) {
    if (i === 1) {
      fibonachi.push(0);
    } else if (i === 2) {
      fibonachi.push(1);
    } else {
      fibonachi.push(
        fibonachi[fibonachi.length - 1] + fibonachi[fibonachi.length - 2]
      );
    }
  }
  return fibonachi;
};

// console.log(fibonachiFunc(4));

// function to findout common elements in an array:-
const a = [5, 2, 1, 3, 4, 5, 2, 3, 6];
const b = [21, 32, 5, 6, 11, 0, 9];

// console.log(a.map((value) => ++value));
// console.log(a.map((value) => value++));

const commonElementArray = (arr1, arr2) => {
  let commonEle = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i]) && !commonEle.includes(arr1[i])) {
      commonEle.push(arr1[i]);
    }
  }
  return commonEle;
};

// console.log(commonElementArray(a, b));

// var i, j;
// loop1: for (i = 0; i < 3; i++) {
//   loop2: for (j = 0; j < 3; j++) {
//     if (i === j) {
//       continue loop1;
//     }
//     console.log("i = " + i + ", j = " + j);
//   }
// }

// outerLoop: for (let i = 0; i < 3; i++) {
//   for (let j = 0; j < 3; j++) {
//     if (j === 1) break outerLoop;
//     console.log(i, j);
//   }
// }

// Polyfill of array includes method:-
Array.prototype.myIncludes = function (value) {
  const arr = this;
  return arr.indexOf(value) !== -1;
};

// polyfill of function bind method:-
Function.prototype.myBind = function (...args1) {
  const func = this;
  const context = args1[0];
  const params = args1.slice(1);
  return function (...args2) {
    func.apply(context, [...params, ...args2]);
  };
};

// polyfill of array map method:-
if (!Array.prototype.map) {
  Array.prototype.myMap = function (callback) {
    const context = this;
    const returnedArray = new Array(context.length);
    for (let i = 0; i < context.length; i++) {
      if (i in context) {
        returnedArray[i] = callback(context[i], i, context);
      }
    }
    return returnedArray;
  };
}

// an array example:-
const grouparray = (arr, n) => {
  let requiredArr = [];
  for (let i = 0; i < arr.length; i = i + n) {
    requiredArr.push(arr.slice(i, i + n));
  }
  return requiredArr;
};

// console.log(grouparray([1, 2, 3, 4, 5], 2)); // result [ [ 1, 2 ], [ 3, 4 ], [ 5 ] ]

// union of two array:-
// const a = [1, 2, 3, 4];
// const b = [3, 4, 5, 6];

const unionArr = (arr1, arr2) => {
  let union = [...arr2];
  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i])) {
      union.push(arr1[i]);
    }
  }
  return union;
};

// console.log(unionArr(a, b));

// debouncing without this and arguments:-
const func = (x) => {
  console.log("function called...");
  console.log(x);
};

// window.addEventListener("resize", func);

// const debounce = (func, delay) => {
//   let timer;
//   return () => {
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       func();
//     }, delay);
//   };
// };

// const betterFunc = debounce(func, 500);
// window.addEventListener("resize", betterFunc);

// debouncing with this and arguments:-
const debounce = (func, delay) => {
  let timer;
  return (...args) => {
    const context = args[0];
    const params = args.slice(1);
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(context, [...params]);
    }, delay);
  };
};

// const betterFunc = debounce(func, 400);
// window.addEventListener("resize", () => {
//   betterFunc(null, "ye debounce hai");
// });

// throttle without this and arguments:-
// const throttle = (func, delay) => {
//   let flag = true;
//   return () => {
//     if (flag) {
//       setTimeout(() => {
//         func();
//         flag = true;
//       }, delay);
//       flag = false;
//     }
//   };
// };

// const betterFunc = throttle(func, 400);
// window.addEventListener("resize", betterFunc);

// throttle with this and arguments:-
const throttle = (func, delay) => {
  let flag = true;
  return (...args) => {
    const context = args[0];
    const params = args.slice(1);
    if (flag) {
      setTimeout(() => {
        func.apply(context, [...params]);
        flag = true;
      }, delay);
      flag = false;
    }
  };
};

// const betterFunc = throttle(func, 500);
// window.addEventListener("resize", () => {
//   betterFunc(null, "ye throttle hai jee");
// });

// function to find deep clone of object:-
const obj = {
  name: "gaurab",
  age: 28,
  address: {
    city: undefined,
    pin: 803211,
  },
};

const deepClone = (obj) => {
  let clonedObj = {};
  if (obj === null || typeof obj !== "object") {
    return obj;
  }
  if (Array.isArray(obj)) {
    return obj.map(deepClone);
  }
  for (let key in obj) {
    clonedObj[key] = deepClone(obj[key]);
  }
  return clonedObj;
};

console.log(deepClone(obj));

// function curring example sum(1)(2)(3)(4)(5)():-
const sum = (val) => {
  let total = val;
  const inner = (next) => {
    if (next === undefined) {
      return total;
    }
    total += next;
    return inner;
  };
  return inner;
};

console.log(sum(1)(2)(3)(4)());

// findout first non-repeating character
const char = "capgeminic";

const requiredFunc = (char)=>{
    let count = 0;
    for(let i=0; i<char.length; char++){
        for(let j=0; j<char.length; char++){
            if(char[i]===char[j]){
                count++
            }
            if(count===1){
                return char[i];
            }
        }
    }
};

console.log(requiredFunc(char));

// one question:-
const arr = [1,2,3,3,3,2,1];

const requiredObj = (arr)=>{
    let count = 0;
    let obj = {};
    for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr.length; j++){
        if(arr[i]===arr[j]){
            count++
        }
    }
    if(!obj[arr[i]]){
        obj = {...obj, [arr[i]]: count};
    }
    count = 0;
}
 return obj
}

console.log(requiredObj(arr))  // { '1': 2, '2': 2, '3': 3 }
