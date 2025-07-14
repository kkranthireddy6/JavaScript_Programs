const people = [
  { name: 'Kelly', age: 20 },
  { name: 'Sally', age: 21 },
  { name: 'John', age: 22 },
  { name: 'Kelly', age: 20 }
]

Array.prototype.groupBy = function () {
  return people.reduce((group, person) => {
    if (group[person.name] == null) {
      group[person.name] = []
    }
    group[person.name].push(person)
    return group
  }, {})
}

console.log(people.groupBy())


//HashMaps groupBy
const useMaps = new Map()

for(const {name, age} of people){
  useMaps.set(name, (useMaps.get(name)||0)+age)
}

const sums = Object.fromEntries(useMaps)
console.log(sums)
