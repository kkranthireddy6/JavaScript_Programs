function* Generator(){
  let arr = [1,2,3,4,5]
  yield* arr
}

const g = Generator()
console.log(g.next())
console.log(g.next())
console.log(g.next())
console.log(g.next())
console.log(g.next())
console.log(g.next())
