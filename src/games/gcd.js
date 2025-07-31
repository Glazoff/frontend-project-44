import { ROUNDS_COUNT } from '../constants.js'
import getRandomInt from '../utils/getRandomInt.js'

const description = 'Find the greatest common divisor of given numbers.'

const MIN = 0
const MAX = 100

function getGCD(min, max) {
  while (max !== 0) {
    const temp = max
    max = min % max
    min = temp
  }
  return min
}

function createQuestion() {
  const int1 = getRandomInt(MIN, MAX)
  const int2 = getRandomInt(MIN, MAX)

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
