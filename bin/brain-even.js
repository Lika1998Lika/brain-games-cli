#!/usr/bin/env node
import game from "../src/index.js";

const getRandomArbitrary = (min, max) =>
  Math.floor(Math.random() * (max - min) + min);
const rules = 'Answer "yes" if the number is even, otherwise answer "no"';
const brainEven = () => {
  const isEven = (num) => num % 2 === 0;
  const question = getRandomArbitrary(1, 100);
  const correctAnswer = isEven(question) ? "yes" : "no";
  return [question, correctAnswer];
};

game(brainEven, rules);
