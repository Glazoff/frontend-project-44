#!/usr/bin/env node
import readlineSync from 'readline-sync'

const ROUNDS_COUNT = 3

let isGameSuccess = true
let userName = ''

function getRandomInt(min = 0, max = 100) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function isEven(num) {
  return num % 2 === 0
}

const rounds = Array.from({ length: ROUNDS_COUNT }, () => {
  const question = getRandomInt()
  return {
    question,
    answer: isEven(question) ? 'yes' : 'no',
  }
})

console.log('Welcome to the Brain Games!')

userName = readlineSync.question('May I have your name? ')
console.log(`Hello, ${userName}!`)

console.log('Answer "yes" if the number is even, otherwise answer "no".')

for (let i = 0; i < rounds.length; i++) {
  const { question, answer } = rounds[i]

  console.log(`Question: ${question}`)
  const response = readlineSync.question('Your answer: ')

  if (response === answer) {
    console.log('Correct!')
  }
  else {
    console.log(`'${response}' is wrong answer ;(. Correct answer was '${answer}'.`)
    console.log(`Let's try again, ${userName}!`)
    isGameSuccess = false
    break
  }
}

if (isGameSuccess) {
  console.log(`Congratulations, ${userName}!`)
}
