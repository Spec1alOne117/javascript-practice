let attemps = 0;

let coinSide = "";

while (coinSide !== "решка") {
  if (Math.random() < 0.5) {
    coinSide = "решка";
  } else {
    coinSide = "орел";
  }
  attemps++;
}

console.log(attemps);
