const departments = [
    { name: 'Sales', budget: 50000 },
    { name: 'Marketing', budget: 35000 },
    { name: 'Engineering', budget: 80000 },
    { name: 'HR', budget: 20000 }
];

const myFn = departments.reduce((acc, element) => {
    return acc + element.budget
}, 0)

console.log(myFn)

//

const students = [
    { name: 'Alice', faculty: 'History' },
    { name: 'Bob', faculty: 'Physics' },
    { name: 'Charlie', faculty: 'History' },
    { name: 'David', faculty: 'Physics' },
    { name: 'Eve', faculty: 'Chemistry' }
];



const myNewFn = students.reduce((acc, element) => {
    if (acc[element.faculty]) {
        acc[element.faculty].push(element.name);
    } else {
      acc [element.faculty] = [element.name]
    }
    return acc }, {})

    console.log(myNewFn)