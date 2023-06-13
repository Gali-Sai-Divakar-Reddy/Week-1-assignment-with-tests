/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/

function calculateTime(n) {
    const startTime = new Date();

    var sum = 0;
    for(var i=0; i < n; i++){
        sum += i;
    }

    const endTime = new Date();;
    const startTimeSec = startTime.getSeconds();
    const endTimeSec = endTime.getSeconds();
    const timeTaken = (endTimeSec - startTimeSec);

    return timeTaken
}


var n = 100000000000;
const ans = calculateTime(n);
console.log(ans);