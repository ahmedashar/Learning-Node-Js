// call Stack
// Node Api
// Event Loop
// call Back Queue

// 1st Example
var x = 1;
var y = x + 3;
console.log('sum is ' + y);

// 2nd Example
console.log('starting')
setTimeout(() => {
    console.log('1 second!')
}, 1000);
setTimeout(() => {
    console.log('2 second!')
}, 2000);
setTimeout(() => {
    console.log('0 second!')
}, 0);
console.log('ending')