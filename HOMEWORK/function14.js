let products = [
  { id: 2, name: 'Product B', price: 20, rating: 4.5, discount: 10 },
  { id: 5, name: 'Product E', price: 15, rating: 3.8, discount: 20 },
  { id: 1, name: 'Product A', price: 25, rating: 4.2, discount: 5 },
  { id: 4, name: 'Product D', price: 30, rating: 4.9, discount: 15 },
  { id: 3, name: 'Product C', price: 18, rating: 3.5, discount: 0 }
];

products.sort((a, b) => a.id - b.id);
console.log(products);

let productWithId5 = products.find(product => product.id === 5);
console.log(productWithId5.name);
