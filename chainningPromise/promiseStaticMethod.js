// const promise1 = new Promise((resolve) => setTimeout(() => resolve(1), 1000));
// const promise2 = new Promise((resolve, reject) => setTimeout(() => reject(new Error('ups')), 2000));
// const promise3 = new Promise((resolve) => setTimeout(() => resolve(3), 3000));

// Promise.all([promise1, promise2, promise3])
//     .then((values) => console.log(values))
//     .catch((error) => console.log(error.message));

const promise1 = new Promise((resolve) => setTimeout(() => resolve(1), 1000));
const promise2 = new Promise((resolve) => setTimeout(() => resolve(2), 2000));
const promise3 = new Promise((resolve) => setTimeout(() => resolve(3), 3000));

Promise.race([promise1, promise2, promise3])
  .then((value) => console.log(value)); // 1 setelah 1 detik
