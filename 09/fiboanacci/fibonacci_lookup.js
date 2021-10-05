var fib = [0, 1]
var x = 0
function fibonacci (n) {
  if (n < 0) throw Error('fibonacci:n < 0')
  x = x+1
  if (fib[n] != null) return fib[n]
  fib[n] = fibonacci(n - 1) + fibonacci(n - 2)
  return fib[n]
}

var startTime = Date.now()
const n = 50
console.log(`fibonacci(${n})=${fibonacci(n)}`)
console.log('fib[]=', fib)
var endTime = Date.now()
var milliSeconds = endTime - startTime
console.log(`time:${milliSeconds}ms`)
console.log(x)
