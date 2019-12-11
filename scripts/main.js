function solve(array) {
    let sum = 0;

    array.forEach(element => {
        sum += element;
    });

    console.log(sum);
}

solve([11, 22, 33, 44]);
