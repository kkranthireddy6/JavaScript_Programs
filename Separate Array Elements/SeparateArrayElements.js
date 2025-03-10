input_array = ['A', 'B', 'C', 1, 2, 3, '4', '5', 6, '@', '~', 'D']

// Initialize separate arrays
integers = []
string = []
chars = []

for (let array of input_array) {
    if (isNaN(array) && /^[A-Za-z]/.test(array)) {
        string.push(array)
    }

    if (isNaN(array) && /[^A-Za-z0-9]/.test(array)) {
        chars.push(array)
    }

    if (!isNaN(array)) {
        integers.push(+(array))
    }
}

console.log("string =", string)
console.log("chars =", chars)
console.log("integer =", integers)

const array_1 = []
const array_2 = []
 
integers.forEach(item =>{
    const randomChoice = Math.random() <0.5 ? array_1 : array_2
    randomChoice.push(item)
})

console.log('array_1= ', array_1)
console.log('array_2= ', array_2)

const array1_Sum = array_1.reduce((a,b)=> a+b, 0)
const array2_Sum = array_2.reduce((a,b)=> a+b, 0)

console.log(`Sum of ${array_1} is: ${array1_Sum}`)
console.log(`Sum of ${array_2} is: ${array2_Sum}`)
