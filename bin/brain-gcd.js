#!/usr/bin/env node
import game from '../src/index.js';

const getRandomArbitrary = (min, max) => Math.floor(Math.random() * (max - min) + min);

const gcdTwoNumbers = (a, b) => (!b ? a : gcdTwoNumbers(b, a % b));

const rules = 'Find the greatest common divisor of given numbers.';
const brainGcd = () => {
  const number1 = getRandomArbitrary(1, 100);
  const number2 = getRandomArbitrary(1, 100);

  const question = `${number1} ${number2}`;
  const correctAnswer = gcdTwoNumbers(number1, number2);
  return [question, String(correctAnswer)];
};

game(brainGcd, rules);
