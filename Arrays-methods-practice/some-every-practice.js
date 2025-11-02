const inventory = [
    { name: 'Laptop', price: 1200, inStock: true },
    { name: 'Mouse', price: 25, inStock: false },
    { name: 'Keyboard', price: 75, inStock: true },
    { name: 'Monitor', price: 300, inStock: true }
];

function isAnythingOutOfStock (productList) {
    return productList.some(element => element.inStock === false);
};

console.log(isAnythingOutOfStock(inventory))

function areAllProductsExpensive (productList) {
    return productList.every(item => item > 20)
}

console.log(areAllProductsExpensive(inventory))