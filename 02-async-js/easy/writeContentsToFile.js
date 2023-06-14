const fs = require('fs')

function writeToFile(content){
    return new Promise((resolve, reject) => {
        fs.writeFile('./test.txt',content, (err) => {
            if(err){
                console.reject(err)
                return
            }
        })
        resolve();
    })
}

const content = "This is the new content written.";
writeToFile(content)
.then(() => {
    console.log("File written successfully")
})
.catch(err => {
    console.error(err)
});