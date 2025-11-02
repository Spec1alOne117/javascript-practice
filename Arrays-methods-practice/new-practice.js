const students = [
  { name: "Alice", grades: { math: 5, history: 4, physics: 5 } },
  { name: "Bob", grades: { math: 3, history: 2, physics: 3 } },
  { name: "Charlie", grades: { math: 5, history: 5, physics: 5 } },
  { name: "David", grades: { math: 4, history: 4, physics: 3 } },
];

function findHonorsStudents(studentsData) {
  const a = studentsData.filter((element) => {
    const ocenki = Object.values(element.grades);

    const symmaOcenek = ocenki.reduce((acc, number) => {
      return acc + number;
    }, 0);

    const srednyaOcenka = symmaOcenek / ocenki.length;

    return srednyaOcenka > 4;
  });

  return a.map((element) => element.name);
}

console.log(findHonorsStudents(students));
