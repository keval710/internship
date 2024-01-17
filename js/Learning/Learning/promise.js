let promiseData = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("success");
  }, 2000);
});

promiseData
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
