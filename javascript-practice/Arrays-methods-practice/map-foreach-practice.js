const myArray = [1, 2, 3];

myArray1 = myArray.map(element => element * 2);

console.log (myArray1);


const products = [
    { name: 'Laptop', price: 1200 },
    { name: 'Mouse', price: 25 },
    { name: 'Keyboard', price: 75 }
];

const newProductList = products.map (element => {
    const newPrice = element.price * 0.8;

    return {
        ...element,
        newPrice
    };
});

console.log (newProductList);


const myArray2 = myArray.forEach(element => element * 2);

console.log (myArray2);

const newProductList2 = [];

products.forEach (element => {
    const newPrice2 = element.price * 0.8;
    const newElement = {...element,
        newPrice2};


    newProductList2.push (newElement);
});

console.log(newProductList2);

