function getGCD(min, max) {
  while (max !== 0) {
    const temp = max
    max = min % max
    min = temp
  }
  return min
}

export default getGCD
