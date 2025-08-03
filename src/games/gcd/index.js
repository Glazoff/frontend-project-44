import { ROUNDS_COUNT } from '../../constants.js'
import getGCD from '../../utils/getGCD.js'
import getRandomInt from '../../utils/getRandomInt.js'
import { description } from './constants.js'

function createQuestion() {
  const int1 = getRandomInt()
  const int2 = getRandomInt()

  const question = `${int1} ${int2}`
  const answer = `${getGCD(int1, int2)}`

  return {
    question,
    answer,
  }
}

function generateQuestions() {
  return Array.from({ length: ROUNDS_COUNT }, createQuestion)
}

export { generateQuestions as default, description }
