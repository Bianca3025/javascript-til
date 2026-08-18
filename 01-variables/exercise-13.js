const distance = 600;
const fuelEfficiency = 45; 
const fuelPrice = 2;
const hotelCost = 65;
const foodCost = 30;

const fuelLiters = distance / fuelEfficiency;
const fuelCost = fuelLiters * fuelPrice;
const total = fuelCost + hotelCost + foodCost;

console.log(`Distance: ${distance} km`);
console.log(`Fuel needed: ${fuelLiters.toFixed(2)} liters`);
console.log(`Fuel cost: $${fuelCost.toFixed(2)}`);
console.log(`Hotel: $${hotelCost.toFixed(2)}`);
console.log(`Food: $${foodCost.toFixed(2)}`);
console.log(`Total trip cost: $${total.toFixed(2)}`);