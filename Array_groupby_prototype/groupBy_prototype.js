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

//groupBy prototype generic function
Array.prototype.groupBy = function(key) {
  return this.reduce((group, item) => {
    const groupKey = item[key];
    if (!group[groupKey]) {
      group[groupKey] = [];
    }
    group[groupKey].push(item);
    return group;
  }, {});
};
const people = [
  { name: 'Kelly', age: 20 },
  { name: 'Sally', age: 21 },
  { name: 'John', age: 22 },
  { name: 'Kelly', age: 20 }
]

console.log(people.groupBy('name'))

//HashMaps groupBy
const useMaps = new Map()
for(const {name, age} of people){
  useMaps.set(name, (useMaps.get(name)||0)+age)
}

const sums = Object.fromEntries(useMaps)
console.log(sums)
