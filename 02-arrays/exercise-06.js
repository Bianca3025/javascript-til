const tripPlan = ['Kagawa', 'Hiroshima', 'Osaka'];

tripPlan.push('Gunma')
tripPlan.splice(2, 1, 'Aomori');

console.log(`First destination: ${tripPlan[0]}`);
console.log(`Last destination: ${tripPlan[tripPlan.length - 1]}`);
console.log(`Total destinations: ${tripPlan.length}`);