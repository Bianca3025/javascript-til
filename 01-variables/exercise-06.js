const item1Price = 100;
const item2Price = 50;
const item3Price = 85;

const subtotal = item1Price + item2Price + item3Price;

const discount = subtotal * 0.1;

const total = subtotal - discount;

console.log(`Subtotal: ${subtotal}`);
console.log(`Discount: ${discount}`);
console.log(`Total: ${total}`);