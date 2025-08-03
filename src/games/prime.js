import { ROUNDS_COUNT, YES, NO } from '../constants.js'
import getRandomInt from '../utils/getRandomInt.js'
import isPrime from '../utils/isPrime.js'

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".'

function createQuestion() {
  const question = getRandomInt()
  const answer = isPrime(question) ? YES : NO

  return {
    question,
    answer,
  }
}

function generateQuestions() {
  return Array.from({ length: ROUNDS_COUNT }, createQuestion)
}

export { generateQuestions as default, description }
