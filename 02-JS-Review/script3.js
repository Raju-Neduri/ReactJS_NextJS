const array = [
  [1, 2],
  [3, 4],
  [5, 6],
];

const flattened = array.reduce((acc, curr) => acc.concat(curr), []);

console.log(flattened); // [1, 2, 3, 4, 5, 6]
