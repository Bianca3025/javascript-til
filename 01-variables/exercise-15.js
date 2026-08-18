const salary = 800000;
const bonus = 350000;
const taxRate = 0.2;
const retirementRate = 0.05

const income = salary + bonus;
const tax = income * taxRate;
const retirementContribution = income * retirementRate;

const takeHomePay = income - tax - retirementContribution;

console.log(`Base salary: ¥${salary}`);
console.log(`Bonus: ¥${bonus}`);
console.log(`Gross income: ¥${income}`);
console.log(`Tax: ¥${tax}`);
console.log(`Retirement: ¥${retirementContribution}`);
console.log(`Take-home pay: ¥${takeHomePay}`);