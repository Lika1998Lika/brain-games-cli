import getRandomNumber from '../utils.js';
import game from '../index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2; i * i <= num; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
};
const runBrainPrime = () => {
  const minValue = 1;
  const maxValue = 100;
  const question = getRandomNumber(minValue, maxValue);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};
export default () => game(runBrainPrime, rules);
