// using a for loop
let evenNumbers = 0;

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
         evenNumbers++;
    }
}

console.log(evenNumbers);

// using a while loop
let evens = 0;
let index = 1;

while (index <= 20) {
    if (index % 2 === 0) {
        evens++;
    }

    index++;
}

console.log(evens);