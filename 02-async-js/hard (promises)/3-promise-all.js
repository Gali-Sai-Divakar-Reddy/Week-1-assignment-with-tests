/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
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

    Promise.all([waitOneSecond(),waitTwoSecond(),waitThreeSecond()])
    .then((results) => {
        results.forEach(result => {
            console.log(result);
        });
        console.log("all promises resolved");
        const endTime = Date.now();
        const ans = endTime - startTime;
        console.log("Time duration: " + ans / 1000 +" seconds");
        
    })
    .catch((err) => {
        console.error(err)
    });

}

calculateTime()