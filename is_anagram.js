function getNum(s, char) {
  let num = 0;
  for (let i = 0, l = s.length; i < l; i += 1) {
    if (s[i] === char) {
      num++;
    }
  }
  return num;
}
function isAnagram(s, t) {
  const s_map = {},
    t_map = {};

  if (s.length !== t.length) {
    return false;
  }

  for (let i = 0, l = s.length; i < l; i += 1) {
    const char = s[i];
    if (!s_map[char]) {
      s_map[char] = getNum(s, char);
    }

    if (!t_map[char]) {
      t_map[char] = getNum(t, char);
    }

    if (s_map[char] !== t_map[char]) {
      return false;
    }
  }

  return true;
}

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));
