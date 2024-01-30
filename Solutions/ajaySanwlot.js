// identity(x) ⇒ any
// Write a function identity that takes an argument and returns that argument

function identity(x) {
  return x;
}

// addb(a, b) ⇒ number
// Write a binary function addb that takes two numbers and returns their sum

function addb(a, b) {
  return a + b;
}

// subb(a, b) ⇒ number
// Write a binary function subb that takes two numbers and returns their difference

function subb(a, b) {
  return a - b;
}

// mulb(a, b) ⇒ number
// Write a binary function mulb that takes two numbers and returns their product

function mulb(a, b) {
  return a * b;
}

// minb(a, b) ⇒ number
// Write a binary function minb that takes two numbers and returns the smaller one

function minb(a, b) {
  return a < b ? a : b;
}

// maxb(a, b) ⇒ number
// Write a binary function maxb that takes two numbers and returns the larger one

function maxb(a, b) {
  return a > b ? a : b;
}

// add(...nums) ⇒ number
// Write a function add that is generalized for any amount of arguments

function add(...nums) {
  return nums.reduce((acc, curr) => acc + curr, 0);
}

// sub(...nums) ⇒ number
// Write a function sub that is generalized for any amount of arguments

// mul(...nums) ⇒ number
// Write a function mul that is generalized for any amount of arguments

// min(...nums) ⇒ number
// Write a function min that is generalized for any amount of arguments

// max(...nums) ⇒ number
// Write a function max that is generalized for any amount of arguments

// addRecurse(...nums) ⇒ number
// Write a function addRecurse that is the generalized add function but uses recursion

// mulRecurse(...nums) ⇒ number
// Write a function mulRecurse that is the generalized mul function but uses recursion

// minRecurse(...nums) ⇒ number
// Write a function minRecurse that is the generalized min function but uses recursion

// maxRecurse(...nums) ⇒ number
// Write a function maxRecurse that is the generalized max function but uses recursion

// not(func) ⇒ function
// Write a function not that takes a function and returns the negation of its result

// acc(func, initial) ⇒ function
// Write a function acc that takes a function and an initial value and returns a function that runs the initial function on each argument, accumulating the result

// accPartial(func, start, end) ⇒ function
// Write a function accPartial that takes in a function, a start index, and an end index, and returns a function that accumulates a subset of its arguments by applying the given function to all elements between start and end.

// accRecurse(func, initial) ⇒ function
// Write a function accRecurse that does what acc does but uses recursion

// fill(num) ⇒ array
// Write a function fill that takes a number and returns an array with that many numbers equal to the given number

// fillRecurse(num) ⇒ array
// Write a function fillRecurse that does what fill does but uses recursion

// set(...args) ⇒ array
// Write a function set that is given a list of arguments and returns an array with all duplicates removed

// identityf(x) ⇒ function
// Write a function identityf that takes an argument and returns a function that returns that argument

// addf(a) ⇒ function
// Write a function addf that adds from two invocations

// liftf(binary) ⇒ function
// Write a function liftf that takes a binary function, and makes it callable with two invocations

// pure(x, y) ⇒ array
// Write a pure function pure that is a wrapper arround the impure function impure

module.exports = {
  identity,
  addb,
  subb,
  mulb,
  minb,
  maxb,
  add,
  sub,
  mul,
  min,
  max,
  addRecurse,
  mulRecurse,
  minRecurse,
  maxRecurse,
  not,
  acc,
  accPartial,
  accRecurse,
  fill,
  fillRecurse,
  set,
  identityf,
  addf,
  liftf,
  pure,
  curryb,
  curry,
  inc,
  twiceUnary,
  doubl,
  square,
  twice,
  reverseb,
  reverse,
  composeuTwo,
  composeu,
  composeb,
  composeTwo,
  compose,
  limitb,
  limit,
  genFrom,
  genTo,
  genFromTo,
  elementGen,
  element,
  collect,
  filter,
  filterTail,
  concatTwo,
  concat,
  concatTail,
  gensymf,
  gensymff,
  fibonaccif,
  counter,
  revocableb,
  revocable,
  extract,
  m,
  addmTwo,
  addm,
  liftmbM,
  liftmb,
  liftm,
  exp,
  expn,
  addg,
  liftg,
  arrayg,
  continuizeu,
  continuize,
  vector,
  exploitVector,
  vectorSafe,
  pubsub,
  mapRecurse,
  filterRecurse,
};
