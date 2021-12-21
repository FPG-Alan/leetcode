function firstUniqChar(s) {
  for (let i = 0, l = s.length; i < l; i += 1) {
    const currentCheckChar = s[i];
    let hasSame = false;
    for (let j = 0; j < l; j += 1) {
      if (j !== i && s[j] === currentCheckChar) {
        hasSame = true;
        break;
      }
    }

    if (!hasSame) {
      return i;
    }
  }

  return -1;
}

console.log(firstUniqChar("leetcode"));
console.log(firstUniqChar("loveleetcode"));
console.log(firstUniqChar("aabb"));
