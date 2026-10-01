// while + build a string
let i = 1;
let numbers = '';

while (i < 11) { 
    numbers += i + '\n';
    i++; 
}

console.log(numbers);

let ii = 1;

// while + direct output
while (ii <= 10) {
    console.log(ii);
    ii++;
}

// for + direct output
for (let index = 1; index <= 10; index++) {
    console.log(index);
}
