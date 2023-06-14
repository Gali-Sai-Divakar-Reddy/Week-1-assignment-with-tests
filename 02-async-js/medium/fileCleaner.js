const fs = require('fs')

async function fileReader(){
    try{
        var textData = await fs.promises.readFile('./dummy.txt','utf-8');
        // console.log(textData);
        return textData;
    }
    catch (err){
        console.error(err)
    }
}

async function fileCleaner(textData){
    try{
        var updatedTextData = textData.replace(/\s+/g, ' ').trim();
        await fs.promises.writeFile('./dummy.txt', updatedTextData);
        console.log("File update successfully");
    }
    catch (err){
        console.error(err)
    }
}

fileReader().then((data) => {
    fileCleaner(data)
})