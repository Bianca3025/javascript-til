const salary = 500000;
const bonus = 200000;
const taxRate = 0.2;
const tax = (salary + bonus) * taxRate;

const finalSalary = salary + bonus - tax;

console.log(`Salary: ${salary}`);
console.log(`Bonus: ${bonus}`);
console.log(`Tax: ${tax}`);
console.log(`Final salary: ${finalSalary}`);