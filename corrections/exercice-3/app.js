console.log('Exercice 3')

const image = document.querySelector('img')
image.src = 'assets/rick.webp'
image.alt = 'Rick'

const firstParagraph = document.querySelector('#mon-premier-paragraphe')
firstParagraph.innerText = 'Bonjour Riri'

const bonjourButton = document.querySelector('#bonjour')
const secondParagraph = document.querySelector('#mon-second-paragraphe')

bonjourButton.addEventListener('click', () => {
  secondParagraph.innerText = 'Bonjour Fifi'
})

const validerButton = document.querySelector('#valider')
const thirdParagraph = document.querySelector('#mon-troisième-paragraphe')
const input = document.querySelector('input')

validerButton.addEventListener('click', () => {
  thirdParagraph.innerText = `Bonjour ${input.value}`
})