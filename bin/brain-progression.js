#!/usr/bin/env node
import game from '../src/index.js';

const getRandomArbitrary = (min, max) => Math.floor(Math.random() * (max - min) + min);

const rules = 'What number is missing in the progression?';

const brainProgression = () => {
  const startNumber = getRandomArbitrary(1, 10);
  const step = getRandomArbitrary(1, 5);
  const progression = [startNumber];
  for (let i = 0; i < 10; i += 1) {
    const nextNumber = progression[progression.length - 1] + step;
    progression.push(nextNumber);
  }
  const randomIndex = getRandomArbitrary(0, progression.length - 1);
  const correctAnswer = progression[randomIndex];
  progression[randomIndex] = '..';
  const question = progression.join(', ');
  return [question, String(correctAnswer)];
};

game(brainProgression, rules);
