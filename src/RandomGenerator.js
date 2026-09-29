import { Mulberry } from "./Mulberry.js";

export class RandomGenerator {
  #algorithm;

  constructor(seed = Date.now()) {
    this.reset(seed);
  }

  #assertInteger(value, name) {
    if (!Number.isInteger(value)) {
      throw new Error(`${name || 'Value'} must be an integer`);
    }
   }

  reset(seed) {
    this.#assertInteger(seed, "Seed");
    this.#algorithm = new Mulberry(seed);
  }

  nextFloat() {
    return this.#algorithm.nextUint32() / 4294967296; // 2^32
  }

  nextInt(min, max) {
    this.#assertInteger(min, "Min");
    this.#assertInteger(max, "Max");
    if (min > max) {
      throw new Error("Min must not be greater than Max");
    }
    return Math.floor(this.nextFloat() * (max - min + 1)) + min;
  }

  nextBoolean(probability = 0.5) {
    if (probability < 0 || probability > 1) {
      throw new Error("Probability must be between 0 and 1");
    }
    return this.nextFloat() < probability;
  }
}
