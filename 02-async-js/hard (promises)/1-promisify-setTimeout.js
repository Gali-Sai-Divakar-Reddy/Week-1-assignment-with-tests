/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Waiting ${n} milli seconds`)
            resolve()
        }, n)
    });
}

function print(){
    setTimeout(() => {
        console.log("hello world!")
    }, 1000)
}

wait(1000)
.then(print)
.catch((err) => {
    console.error(err)
})