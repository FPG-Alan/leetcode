function atoi(s) {
  let num = 0;
  let positive = true;
  let reading_num = false;

  for (let i = 0, l = s.length; i < l; i += 1) {
    const char = s[i];
    const char_code = char.charCodeAt();
    const isNum = char_code >= 48 && char_code <= 57;
    if (reading_num && !isNum) {
      break;
    }

    if (char === " ") {
      continue;
    } else if (char === "-") {
      positive = false;
      reading_num = true;
    } else if (char === "+") {
      reading_num = true;
    } else if (isNum) {
      const singleNum = char_code - 48;
      if (!reading_num) {
        reading_num = true;
      }

      if (num === 0) {
        num += singleNum;
      } else {
        num = num * 10 + singleNum;
      }
    } else {
      break;
    }
  }

  const targetNum = num * (positive ? 1 : -1);
  const minimalNum = Math.pow(-2, 31);
  const maxNum = Math.pow(2, 31) - 1;

  if (targetNum < minimalNum) {
    return minimalNum;
  }

  if (targetNum > maxNum) {
    return maxNum;
  }

  return targetNum;
}

console.log(atoi("4193 with words"));
console.log(atoi("words and 987"));
console.log(atoi("-91283472332"));
console.log(atoi("   -42"));
console.log(atoi("42"));
