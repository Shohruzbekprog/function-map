// Sample Products array
const Products = [
  { id: 3, name: 'Product C', price: 20, rating: 4.5, discount: 0 },
  { id: 1, name: 'Product A', price: 10, rating: 3.8, discount: 0.2 },
  { id: 2, name: 'Product B', price: 15, rating: 4.2, discount: 0.1 },
];

const sortedById = Products.sort((a, b) => a.id - b.id);
console.log(sortedById.map(product => product.name));



