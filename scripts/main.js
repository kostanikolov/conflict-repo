function solve(array) {
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }

    console.log(sum);
}

solve([11, 22, 33, 44]);
