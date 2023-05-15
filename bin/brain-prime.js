#!/usr/bin/env node
import game from '../src/index.js';
import { getRandomArbitrary, minValue, maxValue } from '../src/utils.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2; i * i <= num; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
};
const brainPrime = () => {
  const question = getRandomArbitrary(minValue, maxValue);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};
game(brainPrime, rules); 