function solve(array) {
    let sum = 0;
    let product = 1;

    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }

    for (const el of array) {
        product *= el;        
    }

    console.log(sum);
    console.log(product);
}

solve([11, 22, 33, 44]);
