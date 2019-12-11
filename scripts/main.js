function solve(array) {
    let sum = 0;
    let diff = 0;

    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }

    array.forEach(element => {
        diff -= element;
    });

    console.log(sum);
    console.log(diff);
}

solve([11, 22, 33, 44]);
