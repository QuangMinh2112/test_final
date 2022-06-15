const A1 = [1, 2, 3, "a"];
const A2 = [1, 3, 3, "b"];

let A3 = A1.concat(A2);

const array = A3;

[...new Set(array)];

console.log(array.filter((item, index) => array.indexOf(item) === index));
