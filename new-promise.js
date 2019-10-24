// created their own error
// throw new Error('oops something went wrong');
const promiseGenerator = require('./promise-generator');

const myPromise = new Promise((resolve, reject) => {
  // resolve: .then the promise has been fulfilled
  // reject: .catch the promise has failed
  setTimeout(() => {
    resolve('I resolved successfully');
    // reject('oops something went wrong');
  }, 2000);
});

myPromise
  .then((data) => {
    console.log('promise one');
    return promiseGenerator(2000);
  })
  .then((data) => {
    console.log('promise two');
    return promiseGenerator(2000);
  })
  .then(() => {
    return new Promise((resolve, reject) => {
      reject('promise rejection');
    });
  })
  .catch((err) => {
    console.error(err);
    throw err;
  })
  .then((data) => {
    console.log('promise three');
    return promiseGenerator(2000);
  })
  .then((data) => {
    console.log('promise four');
    return promiseGenerator(2000);
  })
