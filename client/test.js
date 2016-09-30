var state = [
  {
    name: 'maxime',
    age: 12,
  },
  {
    name: 'steven',
    age: 14,
  },
  {
    name: 'bob',
    age: 14,
  }
]

// var filtered = state.filter((item) => {
//   return item.name !== 'maxime'
// })
//
// var test = state.map((item) => {
//
// }).

var test = state.filter((item) => {
  return item.age === 14
}).map((item) => {
  item.name = 'new ' + item.name;
  return item;
})

console.log(test);
