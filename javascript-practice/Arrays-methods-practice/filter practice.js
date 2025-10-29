const products = [
    { name: 'Laptop', price: 1200, available: true },
    { name: 'Mouse', price: 25, available: false },
    { name: 'Keyboard', price: 75, available: true },
    { name: 'Monitor', price: 300, available: true }
];



function filterExpensiveProducts(productsList, minPrice) {
   return productsList.filter(element => 
    element.price > minPrice && element.available === true)
   };
    

console.log(filterExpensiveProducts(products, 100))