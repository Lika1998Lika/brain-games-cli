import getRandomNumber from '../utils.js';
import game from '../index.js';

const rules = 'What number is missing in the progression?';

const makeProgression = (startNumber, step, progressionLength) => {
  const progression = [startNumber];
  for (let i = 0; i < progressionLength; i += 1) {
    const nextNumber = progression[progression.length - 1] + step;
    progression.push(nextNumber);
  }
  return progression;
};

const runBrainProgression = () => {
  const minValue = 1;
  const maxValue = 100;
  const minStep = 1;
  const maxStep = 5;
  const progressionLength = 10;
  const step = getRandomNumber(minStep, maxStep);
  const startNumber = getRandomNumber(minValue, maxValue);
  const progression = makeProgression(startNumber, step, progressionLength);
  const randomIndex = getRandomNumber(0, progression.length - 1);
  const correctAnswer = progression[randomIndex];
  progression[randomIndex] = '..';
  const question = progression.join(' ');
  return [question, String(correctAnswer)];
};

export default () => game(runBrainProgression, rules);
