import getRandomNumber from '../utils.js';
import game from '../index.js';

const gcdTwoNumbers = (a, b) => (!b ? a : gcdTwoNumbers(b, a % b));

const rules = 'Find the greatest common divisor of given numbers.';
const runBrainGcd = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);

  const question = `${number1} ${number2}`;
  const correctAnswer = gcdTwoNumbers(number1, number2);
  return [question, String(correctAnswer)];
};

export default () => game(runBrainGcd, rules);
