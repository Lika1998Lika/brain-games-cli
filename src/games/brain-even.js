import getRandomNumber from '../utils.js';
import game from '../index.js';

const isEven = (num) => num % 2 === 0;
const rules = 'Answer "yes" if the number is even, otherwise answer "no"';
const runBrainEven = () => {
  const question = getRandomNumber(1, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => game(runBrainEven, rules);
