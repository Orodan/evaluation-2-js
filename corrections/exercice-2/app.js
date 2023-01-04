console.log('Exercice 2')

fetch('https://jsonplaceholder.typicode.com/users/1')
  .then(response => response.json())
  .then(json => console.log(json))

fetch('https://jsonplaceholder.typicode.com/users/2')
  .then(response => console.log(response.status))

fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(json => json.forEach(user => console.log(user)))