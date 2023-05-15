#!/usr/bin/env node
import game from '../src/index.js';
import { getRandomArbitrary, minValue, maxValue } from '../src/utils.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no"';
const brainEven = () => {
  const isEven = (num) => num % 2 === 0;
  const question = getRandomArbitrary(minValue, maxValue);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

game(brainEven, rules);
