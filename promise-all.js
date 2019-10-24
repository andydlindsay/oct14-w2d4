const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('promise one rejection');
  }, 2000);
});
const promiseTwo = new Promise((resolve, reject) => {
  resolve('promise two');
});
const promiseThree = new Promise((resolve, reject) => {
  resolve('promise three');
});
const promiseFour = new Promise((resolve, reject) => {
  resolve('promise four');
});
const promiseFive = new Promise((resolve, reject) => {
  resolve('promise five');
});

const promises = [promiseThree, promiseOne, promiseTwo, promiseFour, promiseFive];

Promise.all(promises)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  });

console.log('under promise.all')
