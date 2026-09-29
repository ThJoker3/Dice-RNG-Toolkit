export class Randomizer {
  pick(array, randomGenerator) {
    if (!Array.isArray(array) || array.length === 0) {
      throw new Error("Array must not be empty");
    }
    const index = randomGenerator.nextInt(0, array.length - 1);
    return array[index];
  }

  shuffle(array, randomGenerator) {
    const copy = [...array];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = randomGenerator.nextInt(0, i);
      let temp = copy[i];
      copy[i] = copy[j]; 
      copy[j] = temp;
    }
    return copy;
  }
}