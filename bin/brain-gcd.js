#!/usr/bin/env node
import readlineSync from 'readline-sync';

const getRandomArbitrary = (min, max) =>

Math.floor(Math.random() * (max - min) + min):

const gcdTwoNumbers = (a, b) => (!b ? a : gcdTwoNumbers(b, a % b));

const brainGcd = () => {
  console.log("Welcome to the Brain Games!");
  const name = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${name}`);
  console.log("Find the greatest common divisor of given numbers.");
};

for (let i = 0; i < 3; i += 1) {
  const a = getRandomArbitrary(1, 100);
  const b = getRandomArbitrary(1, 100);
  console.log(`Question: ${a} ${b}`);
  const userAnswer = readlineSync.question("Your answer: ");
  
}

brainGcd();
