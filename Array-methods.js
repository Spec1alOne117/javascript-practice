//.map() - Создает новый массив на основе старого и возвращает новый массив.

const myArray = [1, 2, 3, 10];

const myArray1 = myArray.map(element => element * 2);
console.log (myArray1);

//.forEach() - Сделать что-то для каждого элемента и Возвращает всегда undefined!

const myArray2 = [];

myArray.forEach(element => {
    const newEl = element * 2
    myArray2.push(newEl);
})
console.log(myArray2);

//.filter() - отфильтровать массив. Он "просеивает" элементы через сито твоего условия (true/false)
//  и создает новый массив только с теми элементами, которые прошли проверку.

const myArray3 = myArray.filter(element => element <= 5);

console.log(myArray3)

//.reduce "схлопывает" весь массив до одного-единственного значения, используя аккумулятор. акумулятор имеет начальное значение: 0, '', {} 

const myNewArray = [2, 5, 15, 10];

const myFn = myNewArray.reduce((acc, element) => { return acc + element}, 0)

console.log (myFn)

//.find поиск первого элемента в массиве, который удовлетворяет твоему условию и его возврат

const methodFind = myNewArray.find(element => element > 10)

console.log(methodFind)

//.some проверяет,есть ли в массиве хотя бы один элемент,который удовлетворяет твоему условию.Возвращает true или false. Останавливается на первом же true.
//.every проверяет,все ли элементы в массиве без исключения удовлетворяют твоему условию. Возвращает true или false. Останавливается на первом же false.

const metodSome = myNewArray.some(element => typeof element === 'number')

const metodEvery = myNewArray.every (element => element > 0)

console.log(metodSome)

console.log(metodEvery)

//.indexOf ищет в массиве первое вхождение элемента, который ты ему передал, и возвращает его индекс (порядковый номер).Возвращает индекс 
// (число 0 или больше), или -1, если ничего не найдено.Он не работает для поиска объектов, только для примитивных значений (числа, строки, булевы).

const newArraynumber = [1, 5, 'cat']

console.log(newArraynumber.indexOf(5))

//.findIndex Возвращает индекс (число 0 или больше) первого найденного элемента. Если ничего не найдено, он, как и .indexOf(), возвращает -1

console.log(newArraynumber.findIndex(chifra =>typeof chifra === 'string'))

//.includes "Содержит ли этот массив данный элемент?" Он возвращает true или false.щет точное совпадение и работает только для 
// примитивных значений (числа, строки, булевы). Он плохо работает для поиска объектов.

console.log(newArraynumber.includes(1))