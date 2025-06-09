const duplicateArr = [1, 2, 1, 3, 4, 2, 2, 1, 5, 6];

let uniqueArr = duplicateArr.filter((item, index)=> duplicateArr.indexOf(item) === index)

console.log(uniqueArr)


const set: Set<number> = new Set(numbers); // correct type
console.log([...set]);


const uniqueNumbers: number[] = [...new Set(numbers)];
console.log(uniqueNumbers);
