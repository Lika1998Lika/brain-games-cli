#!/usr/bin/env node
import game from '../src/index.js';
import { getRandomArbitrary, minValue, maxValue } from '../src/utils.js';

const gcdTwoNumbers = (a, b) => (!b ? a : gcdTwoNumbers(b, a % b));

const rules = 'Find the greatest common divisor of given numbers.';
const brainGcd = () => {
  const number1 = getRandomArbitrary(minValue, maxValue);
  const number2 = getRandomArbitrary(minValue, maxValue);

  const question = `${number1} ${number2}`;
  const correctAnswer = gcdTwoNumbers(number1, number2);
  return [question, String(correctAnswer)];
};

game(brainGcd, rules);
