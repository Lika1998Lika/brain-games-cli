import { getRandomArbitrary, minValue, maxValue } from '../utils.js';
import game from '../index.js';

const rules = 'What number is missing in the progression?';

const brainProgression = () => {
  const startNumber = getRandomArbitrary(minValue, maxValue);
  const minStep = 1;
  const maxStep = 5;
  const progressionLength = 10;
  const step = getRandomArbitrary(minStep, maxStep);
  const progression = [startNumber];
  for (let i = 0; i < progressionLength; i += 1) {
    const nextNumber = progression[progression.length - 1] + step;
    progression.push(nextNumber);
  }
  const randomIndex = getRandomArbitrary(0, progression.length - 1);
  const correctAnswer = progression[randomIndex];
  progression[randomIndex] = '..';
  const question = progression.join(' ');
  return [question, String(correctAnswer)];
};

export default () => game(brainProgression, rules);
