//output: {1: 1,2: 2,3: 3,4: 2,5: 1}

let arrays = [[1, 2, 3], [2, 3, 4], [3, 4, 5]];
let countMap = {};

// Loop through the outer array and inner arrays
arrays.forEach(innerArray => {
  innerArray.forEach(element => {
    if (countMap[element] === undefined) {
      countMap[element] = 1;
    } else {
      countMap[element]++;
    }
  });
});

console.log(countMap)

// Log the count for each element
for (let key in countMap) {
  console.log(`Element ${key} occurs ${countMap[key]} times`);
}
