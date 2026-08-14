const originalPrice = 65; 
const discountRate = 0.25;
const discountAmount = originalPrice * discountRate;
const salePrice = originalPrice - discountAmount;

console.log(`Original price: ${originalPrice}`);
console.log(`Discount rate: ${discountRate * 100}%`);
console.log(`Discount amount: ${discountAmount}`);
console.log(`Sale price: ${salePrice}`);