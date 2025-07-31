import { ROUNDS_COUNT } from '../constants.js'
import getRandomInt from '../utils/getRandomInt.js'
import isEven from '../utils/isEven.js'

const description = 'Answer "yes" if the number is even, otherwise answer "no".'

function generateQuestion() {
  return Array.from({ length: ROUNDS_COUNT }, () => {
    const question = getRandomInt()
    return {
      question,
      answer: isEven(question) ? 'yes' : 'no',
    }
  })
}
export { generateQuestion as default, description }
