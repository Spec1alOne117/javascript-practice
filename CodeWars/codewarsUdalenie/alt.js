function disemvoval1(str) {
  const vowels = "euioa";
  return str
    .split("")
    .filter((element) => !vowels.includes(element.toLowerCase()))
    .join("");
}

console.log(disemvoval1("Ya sosal"));
