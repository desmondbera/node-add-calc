// function sum(arr) {
//   return arr.reduce( function(a, b) {
//     return a + b
//   }, 0)
// }

function sum(arr) {
  return arr.reduce( (a, b) => a + b)
}

module.exports.sum = sum
