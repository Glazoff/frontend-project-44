import { ROUNDS_COUNT, YES, NO } from '../../constants.js'
import getRandomInt from '../../utils/getRandomInt.js'
import isEven from '../../utils/isEven.js'
import { description } from './constants.js'

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
