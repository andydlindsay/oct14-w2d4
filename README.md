# W2D4 - Promises

### To Do
- [ ] Illustrate the "callback waterfall" (callback hell) problem
- [ ] Introduction to Promises
- [ ] Error handling with Promises (vs callbacks)
- [ ] Creating our own Promises
- [ ] Parallelizing async things (Promise.race and Promise.all)

### Callback Heck
```js
higherOrderFn((callbackOne) => {
  callbackOne((callbackThree) => {
    callbackTwo((callbackThree) => {
      // do something
    });
  });
});
```

### Promises
- guarantee that you will do something
- either it is fulfilled or it fails
- limbo, floating
- 3 states
  - `fulfilled` - the promise has resolved succesfully
  - `failed` - the promise has failed for something
  - `pending` - the promise has neither failed nor resolved

- An object that may or may not resolve to a value in the future

### How do promises succeed
```js
const myPromise = promiseGenerator();
myPromise.then((data) => {
  console.log(data);
});
```

### Error Handling in Callbacks
```js
higherOrderFn((err, dataOne) => {
  if (err) {
    throw err;
  }
  callbackTwo((err, dataTwo) => {
    if (err) {
      throw err;
    }
    callbackThree((err, dataThree) => {
      if (err) {
        throw err;
      }
      // do something
    });
  });
});
```

DRY - Don't Repeat Yourself
WET - Write Everything Twice

### Handling Errors With Promises
```js
const myPromise = promiseGenerator();
myPromise
  .then(() => {
    // returns a promise
  })
  .then(() => {
    // returns a promise
  })
  .then(() => {
    // returns a promise
  })
  .then(() => {
    // returns a promise
  })
  .catch((err) => {
    // handle error
  });
```



















#
