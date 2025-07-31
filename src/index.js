import readlineSync from 'readline-sync'

function greetUser() {
  console.log('Welcome to the Brain Games!')
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!`)
  return name
}

function printGameOver(name, response, answer) {
  console.log(`'${response}' is wrong answer ;(. Correct answer was '${answer}'.`)
  console.log(`Let's try again, ${name}!`)
}

function requestAnswer(question) {
  console.log(`Question: ${question}`)

  const response = readlineSync.question('Your answer: ')
  return response
}

function runGame(description, rounds) {
  const userName = greetUser()
  let isGameSuccess = true
  console.log(description)

  for (let i = 0; i < rounds.length; i++) {
    const { question, answer } = rounds[i]

    const response = requestAnswer(question)

    if (response === answer) {
      console.log('Correct!')
    }
    else {
      printGameOver(userName, response, answer)
      isGameSuccess = false
      break
    }
  }

  if (isGameSuccess) {
    console.log(`Congratulations, ${userName}!`)
  }
}

export { greetUser, printGameOver, requestAnswer, runGame }
