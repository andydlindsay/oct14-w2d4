const promiseGenerator = require('./promise-generator');
const rejectionGenerator = require('./rejection-generator');

const myPromise = rejectionGenerator();
myPromise.catch(() => {});
