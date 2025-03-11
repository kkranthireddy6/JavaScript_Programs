let str = 'Hello World Kranti';

let inputStr = str.split(' ');

let modifiedStr = '';

for (i = 1; i < inputStr.length; i++) {
  modifiedStr += inputStr[i].charAt(0).toLowerCase() + inputStr[i].slice(1);
}

console.log(inputStr[0] + modifiedStr);
