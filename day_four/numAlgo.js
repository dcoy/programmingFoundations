// This algorithm with recursion

function numAlgo(num) {
  if (num <= 1) return 1;
  console.log(num);

  return numAlgo(num - 1) + numAlgo(num - 2);
}

console.log(numAlgo(20));