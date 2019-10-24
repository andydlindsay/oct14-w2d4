module.exports = (delay = 3000, isRandom = false) => {
  const wait = isRandom ? Math.floor(Math.random() * delay) : delay;
  return new Promise((resolve, reject) => {
    setTimeout(reject, wait);
  });
};
