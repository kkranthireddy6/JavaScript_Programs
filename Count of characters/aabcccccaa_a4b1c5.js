const str = "aabcccccaa";
const charMap = new Map();

let text = ''

for (let ch of str) {
  charMap.set(ch, (charMap.get(ch) || 0) + 1);
}

for (let [key, value] of charMap) {
 text += [key] + [value] 
}

console.log(text)

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
