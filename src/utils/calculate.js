function calculate(a, b, operator) {
  const expressions = {
    '+': a + b,
    '-': a - b,
    '*': a * b,
  }

  return expressions[operator]
}

export default calculate
