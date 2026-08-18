const mainDishPrice = 35;
const mainDishQuantity = 1;
const drinkPrice = 3;
const drinkQuantity = 2;
const dessertPrice = 5;
const dessertQuantity = 2;

const mainDishTotal = mainDishPrice * mainDishQuantity;
const drinkTotal = drinkPrice * drinkQuantity;
const dessertTotal = dessertPrice * dessertQuantity;

const subtotal = mainDishTotal + drinkTotal + dessertTotal;
const serviceCharge = subtotal * 0.1;
const total = subtotal + serviceCharge;

console.log(`Main dish: $${mainDishPrice.toFixed(2)} x ${mainDishQuantity} = $${mainDishTotal.toFixed(2)}`);
console.log(`Drink: $${drinkPrice.toFixed(2)} x ${drinkQuantity} = $${drinkTotal.toFixed(2)}`);
console.log(`Dessert: $${dessertPrice.toFixed(2)} x ${dessertQuantity} = $${dessertTotal.toFixed(2)}`);

console.log(`Subtotal: $${subtotal.toFixed(2)}`);
console.log(`Service charge: $${serviceCharge.toFixed(2)}`);
console.log(`Final total: $${total.toFixed(2)}`);
