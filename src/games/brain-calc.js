import { getRandomArbitrary, minValue, maxValue } from '../utils.js';
import game from '../index.js';

const calcExpression = (operand1, operand2, symbol) => {
  switch (symbol) {
    case '+':
      return operand1 + operand2;
    case '-':
      return operand1 - operand2;
    case '*':
      return operand1 * operand2;
    default:
      return 'Error';
  }
};

const rules = 'What is the result of the expression?';
const brainCalc = () => {
  const operand1 = getRandomArbitrary(minValue, maxValue);
  const operand2 = getRandomArbitrary(minValue, maxValue);
  const symbols = ['+', '-', '*'];
  const randomIndex = getRandomArbitrary(0, symbols.length - 1);
  const symbol = symbols[randomIndex];
  const question = `${operand1} ${symbol} ${operand2}`;
  const correctAnswer = calcExpression(operand1, operand2, symbol);
  return [question, String(correctAnswer)];
};

export default () => game(brainCalc, rules);
