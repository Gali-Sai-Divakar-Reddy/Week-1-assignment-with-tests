count = 0

function counter2 () {
    count++;
    console.log(count);
    setTimeout(counter2, 1000)
}

setTimeout(counter2, 1000)