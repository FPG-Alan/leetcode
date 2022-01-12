function longestCommonPrefix(strs) {
  if (strs.length === 1) {
    return strs[0];
  }

  let hasMore = true;
  let preFix = "";
  let currentIndex = 0;
  while (hasMore) {
    let currentChar = strs[0][currentIndex];
    for (let i = 1, l = strs.length; i < l; i += 1) {
      if (strs[i].length <= currentIndex) {
        hasMore = false;
        break;
      } else {
        if (strs[i][currentIndex] !== currentChar) {
          hasMore = false;
          break;
        }
      }
    }

    if (hasMore) {
      preFix += currentChar;
      currentIndex += 1;
    }
  }
  return preFix;
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
