const products = [
  { id: 2, name: 'Product B', price: 20, rating: 4.5, discount: 10 },
  { id: 1, name: 'Product A', price: 30, rating: 4.8, discount: 20 },
  { id: 3, name: 'Product C', price: 15, rating: 4.2, discount: 5 },
];


products.sort((a, b) => a.price - b.price);
console.log('Sorted by price:', products);

const totalPrice = products.reduce((acc, cur) => acc + cur.price, 0);
console.log('Total Price:', totalPrice);
