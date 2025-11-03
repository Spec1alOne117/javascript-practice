function disemvowel(str) {
  const vowels = "euioa";
  let newString = "";
  for (i = 0; i < str.length; i++) {
    if (!vowels.includes(str[i])) {
      newString += str[i];
    }
  }
  return newString;
}
console.log(disemvowel("Ya sosal"));

function disemvoval1(str) {
  const newVowals = ["a", "u", "i", "o", "a"];
  const newArray = str.split("");
  const withoutVowals = newArray.filter(
    (element) => !newVowals.includes(element)
  );
  return withoutVowals.join("");
}

console.log(disemvoval1("Ya sosal"));
