// Tuples types in ts
const data: [string, string, number, number, boolean?] = ["Hey", "Hello", 1, 2];
data.push(true);
console.log(data);

// TypeScript Type Aliases
type cosType = boolean | string | number;
const a: cosType = 10;
const b: cosType = "asas";
const c: cosType = true;
console.log(a, b, c);

