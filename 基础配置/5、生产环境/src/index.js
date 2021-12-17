import "./index.css";

const checkLit = new Promise((a, b, resolve) => {
  const result = a * b;
  resolve(result);
});
console.log(checkLit(2, 4));