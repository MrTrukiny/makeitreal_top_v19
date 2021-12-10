/* function calculator(num1, num2, operation) {
  // Any operation
  return operation(num1, num2);
}

function add(num1, num2) {
  return num1 + num2;
}

function sustract(num1, num2) {
  return num1 - num2;
}

calculator(5, 6, add);
calculator(10, 9, sustract);

calculator(2, 4, (num1, num2) => {
  return num1 * num2;
})
calculator(4, 2, () => {
  return num1 / num2;
}) */

function calculator(operation) {
  // Any operation
  const num1 = 10, num2 = 2;
  return operation(num1, num2);
}

function add(num1, num2) {
  return num1 + num2;
}

function sustract(num1, num2) {
  return num1 - num2;
}

calculator(add);
calculator(sustract);
calculator((num1, num2) => {
  return num1 * num2;
});
calculator(() => {
  return num1 / num2;
});
