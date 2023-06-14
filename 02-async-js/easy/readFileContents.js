const fs = require('fs');

async function readFileContents() {
    try {
        const data = await fs.promises.readFile('./test.txt','utf-8')
        console.log(data)
    }
    catch(err) {
        console.error(err)
    }
}

readFileContents();

sum =0 
for (var i =0 ; i< 1000000000; i++){
    sum += i
}
console.log(sum)
