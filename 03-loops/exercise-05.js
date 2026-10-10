// using a for loop
let total = 0;

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        total += i;
    }
}

console.log(total);

// using a while loop
let sum = 0;
let index = 1;

while (index <= 20) {
    if (index % 2 === 0) {
        sum += index;
    }

    index++;
}

console.log(sum);

// making the loop visit only even numbers
let final = 0;

for (let numbers = 2; numbers <= 20; numbers += 2) {
    final += numbers;
}

console.log(final);