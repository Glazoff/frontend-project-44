import { ROUNDS_COUNT } from '../constants.js'
import getRandomInt from '../utils/getRandomInt.js'

const description = 'What number is missing in the progression?'

const LENGTH_PROGRESSION = 10
const MAX_STEP = 8
const MIN_STEP = 2
const MAX_FIRST_STEP = 20
const MIN_FIRST_STEP = 0
const MAX_HIDDEN_INDEX = LENGTH_PROGRESSION - 1
const HIDDEN_VALUE = '..'

function createProgression(length, start, step) {
  return Array.from({ length }, (_, i) => start + (i * step))
}

function createQuestion() {
  const step = getRandomInt(MIN_STEP, MAX_STEP)
  const firstStep = getRandomInt(MIN_FIRST_STEP, MAX_FIRST_STEP)
  const hiddenIndex = getRandomInt(0, MAX_HIDDEN_INDEX)

  const progression = createProgression(LENGTH_PROGRESSION, firstStep, step)

  const answer = String(progression[hiddenIndex])
  progression[hiddenIndex] = HIDDEN_VALUE
  const question = progression.join(' ')

  return {
    question,
    answer,
  }
}

function generateQuestions() {
  return Array.from({ length: ROUNDS_COUNT }, createQuestion)
}

export { generateQuestions as default, description }
