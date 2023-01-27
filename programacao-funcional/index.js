const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const people = [
  {
    name: 'Newmar Lucas',
    age: 22,
    gender: 'male',
    married: false,
  },
  {
    name: 'Margaret Hamilton',
    age: 86,
    gender: 'female',
    married: true,
  },
  {
    name: 'Jeff Bezos',
    age: 59,
    gender: 'male',
    married: true,
  }
]

const women = people.filter(person => person.gender === 'female')
const simplifiedData = people.map(person => ({
  name: person.name,
  age: person.age,
}))
const oddSum = numbers
  .filter(number => number % 2 !== 0)
  .reduce((prev, cur) => prev + cur, 0)

console.log('='.repeat(25), 'Dados utilizados', '='.repeat(25))
console.log('Um array de números = ', numbers)
console.log('\nUm array de objetos com dados de pessoas = ', people)

console.log('='.repeat(20), 'Filtrando apenas mulheres', '='.repeat(20))
console.log(women)

console.log('='.repeat(15), 'Novo array com apenas alguns dados', '='.repeat(15))
console.log(simplifiedData)

console.log('='.repeat(20), 'Soma de todos os números ímpares', '='.repeat(20))
console.log(oddSum)