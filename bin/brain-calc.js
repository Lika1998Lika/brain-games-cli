#!/usr/bin/env node
import game from "../src/index.js";

const getRandomArbitrary = (min, max) =>
  Math.floor(Math.random() * (max - min) + min);

const calcExpression = (operand1, operand2, symbol) => {
  switch (symbol) {
    case "+":
      return operand1 + operand2;
    case "-":
      return operand1 - operand2;
    case "*":
      return operand1 * operand2;
    default:
      return "Error";
  }
};

const rules = "What is the result of the expression?";
const brainCalc = () => {
  const operand1 = getRandomArbitrary(1, 10);
  const operand2 = getRandomArbitrary(1, 10);
  const symbols = ["+", "-", "*"];
  const randomIndex = getRandomArbitrary(0, symbols.length - 1);
  const symbol = symbols[randomIndex];
  const question = `${operand1} ${symbol} ${operand2}`;
  const correctAnswer = calcExpression(operand1, operand2, symbol);
  return [question, String(correctAnswer)];
};

game(brainCalc, rules);
