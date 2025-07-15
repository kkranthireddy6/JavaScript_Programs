const people = [
  { name: 'Kelly', age: 20 },
  { name: 'Sally', age: 21 },
  { name: 'John', age: 22 },
  { name: 'Kelly', age: 20 }
]

//HashMaps groupBy
function calculateTotalSpent(transactions) {
  const usersums = new Map()

  for (const { userId, amount } of transactions) {
    usersums.set(userId, (usersums.get(userId) || 0) + amount)
  }
  
  const sums = [
    { 'totalSpent': Object.values(usersums) },
    { 'userId': Object.entries(usersums) }
  ]
  return sums
}

console.log(calculateTotalSpent(transactions));

//group elements by 'name'
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

console.log(people.groupBy('name')
