import { ROUNDS_COUNT } from '../constants.js'
import getRandomInt from '../utils/getRandomInt.js'
import isEven from '../utils/isEven.js'

const YES = 'yes'
const NO = 'no'

const description = 'Answer "yes" if the number is even, otherwise answer "no".'

function createQuestion() {
  const question = getRandomInt()
  const answer = isEven(question) ? YES : NO

  return {
    question,
    answer,
  }
}

function generateQuestions() {
  return Array.from({ length: ROUNDS_COUNT }, createQuestion)
}

export { generateQuestions as default, description }
