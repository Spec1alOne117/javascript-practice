const serverConfig = {
    port: 8080,
    host: 'localhost',
    protocol: 'http',
    timeout: 5000,
    logging: true
};

function countProperties(server) {
    const kluch = Object.keys(server);
    return kluch.length
};

console.log(countProperties(serverConfig))

const grades = {
    math: 5,
    history: 4,
    physics: 2,
    literature: 5
};

function myFn (studentGrades) {
   const a = Object.values (studentGrades);
   return a.some(element => element < 3)
};

console.log(myFn (grades))


const projectBudget = {
    salaries: 15000,
    marketing: 3500,
    rent: 2000,
    equipment: 5500
};

function calculateTotalBudget(budjet) {
   const b = Object.values (budjet);
   const c = b.reduce((acc, element) => {
    return acc + element;
   }, 0)
   return c
};

console.log(calculateTotalBudget(projectBudget))

function findLargeExpenses(budjet, amount) {
    const a = Object.values(budjet);
    return a.filter(element => element >= amount);
};

console.log(findLargeExpenses(projectBudget, 5000))