let income, rent, food, transport, entertainment, savingsRate

income = 600000;
rent = 90000;
food = 85000;
transport = 5500;
entertainment = 15000;

savingsRate = 0.2;

totalExpenses = rent + food + transport + entertainment;
savings = income * savingsRate
remainingMoney = income - totalExpenses - savings

console.log(`Income: ${income}`);
console.log(`Rent: ${rent}`);
console.log(`Food: ${food}`);
console.log(`Transport: ${transport}`);
console.log(`Entertainment: ${entertainment}`);
console.log(`Total expenses: ${totalExpenses}`);
console.log(`Savings: ${savings}`);
console.log(`Remaining money: ${remainingMoney}`);
