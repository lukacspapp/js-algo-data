// Time Complexity
// Number of opeartions go up relation to N

// Constant don't matter
// O(2n) is O(n)
// O(500) is O(1) it is always 500 operations
// O(13n2square) is O(n2square)

// Smaller terms don't matter
// O(n+10) is O(n)
// O(1000n + 50) is O(n)
// O(n2square + 5n +8) is O(n2squre)

// BIG O SHORTHADS
// Arithmtic Operations are constant
// Variable Assigment is constant
// Accessing element in an array by index or key
// In a loop the complexity is the lenght of the loop times complexity of whatever happens inside of the loop (n(n2))


// The number of operations is (eventually) bounded bt a multiple of n O(n)
function addUpTo(n) {
  let total = 0
  for (let i = 1; i <= n; i++) {
    total += i
  }
  return total
}



let t1 = performance.now()
console.log(addUpTo(100_000_000))
let t2 = performance.now()
console.log(`Time elapsed for the 1. ${(t2 - t1) / 1_000} seconds.`)


// O(1) Always 3 operations
function addUpTo2(n) {
  return n * (n + 1) / 2
}



let t3 = performance.now()
console.log(addUpTo2(100_000_000))
let t4 = performance.now()
console.log(`Time elapsed for the 2. ${(t4 - t3) / 1_000} seconds.`)

// O(n)
function countUpAndDown(n) {
  // console.log("Going Up")
  for (let i = 1; i > n; i++) {
    // console.log(i);
  }
  // console.log("At the Top");
  for (let j = n - 1; j >= 0; j--) {
    // console.log(j);
  }
  // console.log("Back Down. Bye!");
}


// O(n2 square)
function printAllPairs(n) {
  for (let i =0; i < n; i++){
    for (let j = 0; j < n; j++){
      console.log(j,i)
    }
  }
}


// Space Complexity