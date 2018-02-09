/* 
  Objective: In this project, we will be building what is called Bing Bong.
  This application will loop through a list of 0 - 100. For each number,
  if it is divisible by 3, you will print 'Bing' to the console.
  If it is divisible by 5, you will print 'Bong' to the console.
  If the number is divisible by 3 and 5, you will print both 'Bing' and 'Bong'.
*/

function test(n) {
  if (n % 15 === 0) {
    return 'BingBong'
  } else if (n % 5 === 0) {
    return 'Bing'
  } else if (n % 3 === 0)  {
    return 'Bong'
  } else {
    return n
  }
}

function bingBong(maxNum) {
  for (let i = 0; i < maxNum; i++) {
    document.write(`<div class="col">${test(i)}</div>`);
  }
}

bingBong(100);