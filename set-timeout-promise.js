// setTimeout(() => {}, 2000);

const setTimeoutPromise = (delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, delay);
  });
};

module.exports = setTimeoutPromise;
