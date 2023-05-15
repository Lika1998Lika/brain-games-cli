#!/usr/bin/env node
import game from '../src/index.js';

const getRandomArbitrary = (min, max) => Math.floor(Math.random() * (max - min) + min);

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const minValue = 1;
const maxValue = 21;
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