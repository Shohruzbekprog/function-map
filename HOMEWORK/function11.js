let Products = [
  { id: 1, name: "Product A", price: 10, rating: 4.5, discount: 0 },
  { id: 2, name: "Product B", price: 15, rating: 3.8, discount: 5 },
  { id: 3, name: "Product C", price: 12, rating: 4.2, discount: 10 },
  { id: 4, name: "Product D", price: 8, rating: 4.7, discount: 3 },
];

console.log("Sorted by name: ", Products);
Products.sort((a, b) => a.price - b.price);
console.log("Sorted by price: ", Products);