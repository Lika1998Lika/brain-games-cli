import getRandomNumber from '../utils.js';
import game from '../index.js';

const minValue = 1;
const maxValue = 100;
const rules = 'Answer "yes" if the number is even, otherwise answer "no"';
const runGame = () => {
  const isEven = (num) => num % 2 === 0;
  const question = getRandomNumber(minValue, maxValue);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => game(runGame, rules);
