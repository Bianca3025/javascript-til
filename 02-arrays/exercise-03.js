const shoppingList = ['milk', 'eggs', 'bread'];

shoppingList.push('apples', 'coffee', 'cheese');
shoppingList[2] = 'rice';
shoppingList.splice(1, 1);

console.log(shoppingList);
