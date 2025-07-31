#!/usr/bin/env node
import { runGame } from '../src/index.js'
import generateQuestion, { description } from '../src/games/even.js'

const rounds = generateQuestion()
runGame(description, rounds)
