export class Randomizer {
  #assertArray(value, name) {
  if (!Array.isArray(value)) {
    throw new Error(`${name} must be an array`);
  }
}
  pick(array, randomGenerator) {
    this.#assertArray(array, "Argument");
    if (array.length === 0) {
      throw new Error("Array must not be empty");
    }
    const index = randomGenerator.nextInt(0, array.length - 1);
    return array[index];
  }

  shuffle(array, randomGenerator) {
    this.#assertArray(array, "Argument");
    const copy = [...array];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = randomGenerator.nextInt(0, i);
      let temp = copy[i];
      copy[i] = copy[j]; 
      copy[j] = temp;
    }
    return copy;
  }

  pickWeighted(items, weights, randomGenerator) {
    this.#assertArray(items, "Items");
    this.#assertArray(weights, "Weights");
    if (items.length !== weights.length) {
      throw new Error("Items and weights must have the same length");
    }
    const totalWeight = weights.reduce((sum, w) => sum + w, 0);
    const threshold = randomGenerator.nextFloat() * totalWeight;
    let running = 0;
    for (let i = 0; i < items.length; i++) {
      running += weights[i];
      if (running > threshold) {
        return items[i];
      }
    }
  }
}