function strStr(haystack, needle) {
  if (needle === "") {
    return 0;
  }

  for (let i = 0, l = haystack.length; i < l; i += 1) {
    if (haystack[i] === needle[0]) {
      if (needle.length === 1) {
        return i;
      } else if (haystack.length > 1 && needle.length <= l - i) {
        let equal = true;
        for (let j = 1, k = needle.length; j < k; j += 1) {
          if (haystack[i + j] !== needle[j]) {
            equal = false;
            break;
          }
        }

        if (equal) {
          return i;
        }
      }
    }
  }

  return -1;
}

console.log(strStr("hello", "ll"));
console.log(strStr("aaaaa", "bba"));
console.log(strStr("aaa", "aaaa"));
console.log(strStr("", ""));
