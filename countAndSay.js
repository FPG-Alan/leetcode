function countAndSay(n) {
  if (n === 1) {
    return "1";
  } else if (n === 2) {
    return "11";
  } else {
    const str = countAndSay(n - 1);
    let result = "";
    let current = str[0];
    let count = 1;
    for (let i = 1, l = str.length; i < l; i += 1) {
      if (str[i] === current) {
        count++;
      } else {
        result += `${count}${current}`;
        current = str[i];
        count = 1;
      }
    }
    result += `${count}${current}`;
    return result;
  }
}

console.log(countAndSay(5));
