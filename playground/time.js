var moment = require('moment');

var date = moment();

date.add(1000, 'year').subtract(9, 'months');

console.log(date.format('MMM Do, YYYY'));
console.log(moment().format('h:mm a'));
console.log(moment(1234));
console.log(moment().valueOf());
