const duplicateArr = [1, 2, 1, 3, 4, 2, 2, 1, 5, 6];

//Method 1:
const set = new Set(numbers); // correct type
console.log([...set]);

//Method 2:
const uniqueNumbers = [...new Set(numbers)];
console.log(uniqueNumbers);

//Method 3:
let uniqueArr = duplicateArr.filter((item, index)=> duplicateArr.indexOf(item) === index)
console.log(uniqueArr)
