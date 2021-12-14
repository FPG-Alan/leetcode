function reverseString(s) {
  let tmp = null;
  for (let i = 0, l = Math.floor(s.length / 2); i < l; i += 1) {
    const opsit = s.length - i - 1;
    tmp = s[i];
    s[i] = s[opsit];
    s[opsit] = tmp;
  }
}
const s = ["h", "e", "l", "l", "o"];
reverseString(s);
console.log(s);
