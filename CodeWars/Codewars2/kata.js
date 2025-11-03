function myFn(numberList) {
  return numberList.filter((element) => typeof element === "number");
}

console.log(myFn([1, 2, "a", "b"]));

const role = "admin";
switch (role) {
  case "ceo":
    console.log("CEO");

  case "admin":
    console.log("admin");
}

5 < 0 ? console.log("ya sosal") : undefined;
