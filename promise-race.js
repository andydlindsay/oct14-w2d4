const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('promise one rejection');
  }, Math.floor(Math.random() * 2000));
});
const promiseTwo = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('promise two');
  }, Math.floor(Math.random() * 2000));
});
const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('promise three');
  }, Math.floor(Math.random() * 2000));
});
const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('promise four');
  }, Math.floor(Math.random() * 2000));
});
const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('promise five');
  }, Math.floor(Math.random() * 2000));
});

const promises = [promiseThree, promiseOne, promiseTwo, promiseFour, promiseFive];

Promise.race(promises)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  });

// console.log('under promise.race')
