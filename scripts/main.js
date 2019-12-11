function solve(array) {
    let sum = 0;

<<<<<<< HEAD
    array.forEach(element => {
        sum += element;
    });
=======
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
>>>>>>> 4f69fd1de9387be16d1453605ea93da4f7427e93

    console.log(sum);
}

solve([11, 22, 33, 44]);
