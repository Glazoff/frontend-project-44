import { ROUNDS_COUNT } from '../constants.js'
import getRandomInt from '../utils/getRandomInt.js'
import getRandomOperator from '../utils/getRandomOperator.js'

const description = 'What is the result of the expression?'

const MIN = 0

const MAX = 25

// helper fc
function calculate(a, b, operator) {
  const expressions = {
    '+': a + b,
    '-': a - b,
    '*': a * b,
  }

  return expressions[operator]
}

function createQuestion() {
  const int1 = getRandomInt(MIN, MAX)
  const int2 = getRandomInt(MIN, MAX)
  const operator = getRandomOperator()

  const question = `${int1} ${operator} ${int2}`
  const answer = `${calculate(int1, int2, operator)}`

  return {
    question,
    answer,
  }
}

function generateQuestion() {
  return Array.from({ length: ROUNDS_COUNT }, createQuestion)
}

export { generateQuestion as default, description }
