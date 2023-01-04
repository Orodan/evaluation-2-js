console.log('Exercice 1')

setTimeout(() => {
  console.log('Hello world')
}, 3000)

let i = 0;
const timer = setInterval(() => {
  if (i > 10) {
    clearInterval(10)
  } else {
    console.log(i)
    i++
  }
}, 1000)