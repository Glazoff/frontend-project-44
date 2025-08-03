#!/usr/bin/env node
import { runGame } from '../src/index.js'
import generateQuestions, { description } from '../src/games/prime/index.js'

const rounds = generateQuestions()
runGame(description, rounds)
