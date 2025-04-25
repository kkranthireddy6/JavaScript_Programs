const arr = [1,2,3,4,5,6,7,8,9,10,11]

function separateArrays(arr, size=3) {
  let newarr = []
  for(let i=0; i<arr.length; i+=3){
    newarr.push(arr.slice(i, i+size))
  }
  return newarr;
}

const result = separateArrays(arr)
console.log()
