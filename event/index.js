const { EventEmitter }  = require('events');

const birthdayEventListener = (name) => {
    console.log(`Happy birthday ${name}!`);
  }

const myEmitter = new EventEmitter();

myEmitter.on('tiup-lilin', birthdayEventListener);

myEmitter.emit('tiup-lilin', "mursidin" );