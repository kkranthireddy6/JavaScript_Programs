let inputStr = "Hello World Kranti"

function modifyingstring(str) {
    return str.split(' ')
        .map((word, index) => index === 0 ? word : word.charAt(0).toLowerCase() + word.slice(1))
        .join('')
}

const result = modifyingstring(inputStr)
console.log(result)
