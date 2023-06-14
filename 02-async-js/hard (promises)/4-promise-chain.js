/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // console.log("Waited one second");
            resolve("resolved in 1 second");
        }, 1000)
    })
}

function waitTwoSecond() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // console.log("Waited Two seconds");
            resolve("resolved in 2 seconds");
        }, 2000)
    })
}

function waitThreeSecond() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // console.log("Waited three second");
            resolve("resolved in 3 seconds");
        }, 3000)
    })
}

function calculateTime() {
    const startTime = Date.now();

    waitOneSecond()
    .then((result1) =>{
        console.log(result1);
        return waitTwoSecond();
    })
    .then((result2) => {
        console.log(result2);
        return waitThreeSecond();
    })
    .then((result3) => {
        console.log(result3);
        const endTime = Date.now();
        const timeDiff = endTime - startTime ;

        console.log("All promises resolved");
        console.log("The time taken is: " + timeDiff +" ms");
    })
}

calculateTime()