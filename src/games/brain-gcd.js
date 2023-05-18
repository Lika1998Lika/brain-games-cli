import getRandomNumber from '../utils.js';
import game from '../index.js';

const minValue = 1;
const maxValue = 100;

const gcdTwoNumbers = (a, b) => (!b ? a : gcdTwoNumbers(b, a % b));

const rules = 'Find the greatest common divisor of given numbers.';
const runGame = () => {
  const number1 = getRandomNumber(minValue, maxValue);
  const number2 = getRandomNumber(minValue, maxValue);

  const question = `${number1} ${number2}`;
  const correctAnswer = gcdTwoNumbers(number1, number2);
  return [question, String(correctAnswer)];
};

export default () => game(runGame, rules);
