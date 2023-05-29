import getRandomNumber from '../utils.js';
import game from '../index.js';

const isEven = (num) => num % 2 === 0;
const rules = 'Answer "yes" if the number is even, otherwise answer "no"';
const runBrainEven = () => {
  const minValue = 1;
  const maxValue = 100;
  const question = getRandomNumber(minValue, maxValue);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => game(runBrainEven, rules);
