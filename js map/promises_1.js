/* AUTHOR: STEFAN AMOAH */

// pending, rejected, fulfilled
//.then for resolve
//.catch for reject

const value = 2;

const promise = new Promise((resolve, reject) => {
  const random = Math.floor(Math.random() * 3);
  console.log(random); //to check if random number generated is = value(2)
  if (random === value) {
    resolve("You guessed correctly");
  } else {
    reject("Wrong number");
  }
});

console.log(promise);

promise
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
