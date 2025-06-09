//input: How to fetch enviroment variables from server to nodeJS files
//outut: woH to thfec vtronnmiee vsrliebaa romf vsrree to SonJed slife

let str = "How to fetch enviroment variables from server to nodeJS files"
console.log(str)

let words = str.split(' ')
let result = words.map(word =>word.split('').sort((a, b) => b.localeCompare(a)).join(''));
console.log(result.join(' '))
