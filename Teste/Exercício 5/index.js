function invertString(str) {
  let inv = "";
  for (let i = str.length - 1; i >= 0; i--) {
    inv += str[i];
  }
  return inv;
}
console.log(invertString("Target Sistemas"));
