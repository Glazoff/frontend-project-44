import { ROUNDS_COUNT } from '../../constants.js'
import createProgression from '../../utils/createProgression.js'
import getRandomInt from '../../utils/getRandomInt.js'
import { MAX_STEP, MIN_STEP, MIN_FIRST_STEP, MAX_FIRST_STEP, MAX_HIDDEN_INDEX, LENGTH_PROGRESSION, HIDDEN_VALUE, description } from './constants.js'

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
