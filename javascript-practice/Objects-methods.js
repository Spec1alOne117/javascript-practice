//Object.keys() позволяет получить все ключи (имена свойств) из объекта и возвращает их в виде массива строк.

const myObject = {
    name: 'Anton',
    age: 25,
    size: 185,
    programist: true
};

console.log(Object.keys (myObject))

//Object.values() дает массив значений свойств.

console.log(Object.values(myObject))

// Object.entries() преобразует объект в массив массивов, где каждый внутренний массив представляет собой пару [ключ, значение].

const car = {
    brand: 'Tesla',
    model: 'Model S',
    year: 2022
};

console.log (Object.entries(car))