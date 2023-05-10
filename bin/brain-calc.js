#!/usr/bin/env node
import readlineSync from 'readline-sync';

const getRandomArbitrary = (min, max) => Math.floor(Math.random() * (max - min) + min);

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

const brainCalc = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  console.log('What is the result of the expression?');

  for (let i = 0; i < 3; i += 1) {
    const operand1 = getRandomArbitrary(1, 10);
    const operand2 = getRandomArbitrary(1, 10);
    const symbols = ['+', '-', '*'];
    const randomIndex = getRandomArbitrary(0, symbols.length - 1);
    const symbol = symbols[randomIndex];
    const correctAnswer = calcExpression(operand1, operand2, symbol);
    console.log(`Question: ${operand1} ${symbol} ${operand2}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer === Number(userAnswer)) {
      console.log('Correct!');
    } else {
      console.log(
        `"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}"`,
      );
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
brainCalc();
