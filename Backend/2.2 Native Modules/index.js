const fs = require('fs')
const { readFile } = require('node:fs')

readFile('./message.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(data);
}); 

// fs.writeFile('message.txt', 'Hello from nodeJS', (err) =>{
//     if(err) throw err;
//     console.log('The file has been saved')
// })

