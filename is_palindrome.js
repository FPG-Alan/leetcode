function isPalindrome(s) {
  s = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  if (s.length <= 1) {
    return true;
  }

  if (s.length === 2) {
    return s[0] === s[1];
  }
  let max_l = s.length - 1;
  let half_l = Math.floor(s.length / 2);

  for (let i = 0, l = half_l; i < l; i += 1) {
    if (s[i] !== s[max_l - i]) {
      return false;
    }
  }

  return true;
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome("0P"));
