const event = require('./resources/aws.input.json');
const {handler} = require('.');

handler(event).then(console.log).catch(console.log);
