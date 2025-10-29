const books = [
  { title: "Dune", pages: 658 },
  { title: "Harry Potter", pages: 223 },
];

const bookTitles = books.map((books) => books.title);
console.log(bookTitles);

const letters = ["a", "b", "c"];
const indexValue = letters.map((letter, index) => `${index}->${letter}`);

console.log(indexValue);

const products = [
  { name: "Phone", price: 20000 },
  { name: "Laptop", price: 60000 },
];

const updatedProduct = products.map((p) => ({
  ...p,
  price: p.price * 1.1, // 10% tax added
}));

console.log(updatedProduct);
