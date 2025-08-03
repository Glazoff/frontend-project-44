function createProgression(length, start, step) {
  return Array.from({ length }, (_, i) => start + (i * step))
}

export default createProgression
