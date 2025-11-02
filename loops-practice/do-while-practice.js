function accumulateUntil(limit, rand) {
  let sum = 0;
  let count = 0;
  let values = [];

  let generatorNumbers = () => Math.floor(Math.random() * 10) + 1;

  do {
    let generatorNumbers = () => Math.floor(Math.random() * 10) + 1;
    const a = generatorNumbers();
    sum = sum + a;
    count++;

    values.push(a);
  } while (sum < limit);

  return { sum, count, values };
}

console.log(accumulateUntil(40));
