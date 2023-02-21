const fs = require('fs');
const path = require('path');

const readbleStream = fs.createReadStream(path.resolve(__dirname, './input.txt'), {
    highWaterMark: 15
});

const writebleStream = fs.createWriteStream(path.resolve(__dirname, 'output.txt'))

readbleStream.on('readable', () => {
    try {
        process.stdout.write(`${readbleStream.read()}\n`)
    } catch (error) {
        console.log(error)
    }
})

readbleStream.on('end', () => {
    writebleStream.end();
});
