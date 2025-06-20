const items = [
  {
    name: "kranti",
    age: 20,
    subitems: [
      { name: "kumar", age: 20 }
    ]
  },
  {
    name: "cherlapally",
    age: 20,
    subitems: [
      {
        name: "sisters",
        subitems: [
          {
            name: "pranathi"
          },
          {
            name: "pranisha"
          },
          {
            name: "prathyusha"
          }
        ]
      }
    ]
  }
]

function recursiveMap(items){
 return items.flatMap(item=> [
    item.name,
    ...(item.subitems ? recursiveMap(item.subitems) : [])
  ])
}

console.log(recursiveMap(items))


//output: 
/*
  ["kranti"
"kumar"
"cherlapally"
"sisters"
"pranathi"
"pranisha"
"prathyusha"]
*/
