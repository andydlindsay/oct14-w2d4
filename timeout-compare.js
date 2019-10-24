const setTimeoutPromise = require('./set-timeout-promise');

setTimeout(() => {
  console.log('vanilla setTimeout fired');
}, 3000);

setTimeoutPromise(4000)
  .then(() => {
    console.log('setTimeoutPromise has fired');
  });
