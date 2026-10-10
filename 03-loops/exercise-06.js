// using if / else if / else
for (let i = 1; i <= 30; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');   
    }
    else if (i % 3 ===0) {
        console.log('Fizz');
    }
    else if (i % 5 === 0) {
        console.log('Buzz');
    }
    else {
        console.log(i);
    }
}

// alternative: using a variable to build the result
for (let index = 1; index <= 30; index++) {
    let result = '';

    if (index % 3 === 0) {
        result += 'Fizz';
    }

    if (index % 5 === 0) {
        result += 'Buzz';
    }

    if (result === '') {
        result = index;
    }

    console.log(result);
}