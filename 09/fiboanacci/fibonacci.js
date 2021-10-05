var x=0

function fibonacci (n) {
  if (n < 0) throw Error('fibonacci:n < 0')
  x = x+1
  if (n === 0) return 0
  if (n === 1) return 1
  return fibonacci(n - 1) + fibonacci(n - 2)
}

var startTime = Date.now()
const n = 40
console.log(`fibonacci(${n})=${fibonacci(n)}`)
var endTime = Date.now()
var milliSeconds = endTime - startTime
console.log(`time:${milliSeconds}ms`)
console.log(x)