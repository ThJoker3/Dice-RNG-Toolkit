export class Dice {
  #sides;

  constructor(sides = 6) {
    if (!Number.isInteger(sides) || sides <= 0) {
      throw new Error("Number of sides must be a positive integer");
    }
    this.#sides = sides;
  }

  roll(randomGenerator) {
    return randomGenerator.nextInt(1, this.#sides);
  }
}