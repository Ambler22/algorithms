function isPalindrome(x: number): boolean {
  const xString = x.toString();
  const xStringReversed = xString.split("").reverse().join("");
  return xString == xStringReversed;
}

function isPalindrome2(x: number): boolean {
  if (x < 0) {
    return false;
  }

  let xCopy = x;
  let xReversed = 0;

  while (xCopy > 0) {
    let lastDigit = xCopy % 10;
    xReversed = xReversed * 10 + lastDigit;
    xCopy = Math.floor(xCopy / 10);
  }

  return x == xReversed;
}

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));

console.log(isPalindrome2(121));
console.log(isPalindrome2(-121));
console.log(isPalindrome2(10));
