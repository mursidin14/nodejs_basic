const fs = require('fs');
const { resolve } = require('path');

const fileReadCallback = (err, data) => {
    if(err) return console.log('gagal membuka file')
        
     console.log(data)
};

fs.readFile(resolve(__dirname, 'notes.txt'), 'UTF-8', fileReadCallback);
