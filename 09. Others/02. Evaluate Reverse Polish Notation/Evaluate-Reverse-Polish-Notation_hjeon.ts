function calculate(oprnd1: number, oprnd2: number, oprator: string): number {
  if (oprator === "*") return oprnd1 * oprnd2;
  else if (oprator === "+") return oprnd1 + oprnd2;
  else if (oprator === "-") return oprnd2 - oprnd1;
  else if (oprator === "/") return Math.trunc(oprnd2 / oprnd1);
  else return 0;
}

function evalRPN(tokens: string[]): number {
  let stack: number[] = [];

  tokens.forEach((token) => {
    if (/[^+-/*//]/.test(token)) stack.push(parseInt(token));
    else {
      let operand1 = stack.pop() || 0;
      let operand2 = stack.pop() || 0;

      stack.push(calculate(operand1, operand2, token));
    }
  });
  return stack.pop() || 0;
}
