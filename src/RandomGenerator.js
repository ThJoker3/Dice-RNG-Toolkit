export class RandomGenerator {
  #state;

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
    this.#state = seed | 0;
  }

  nextFloat() {
    this.#state = (this.#state + 0x6D2B79F5) | 0;
    let t = this.#state;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t = (t ^ (t + Math.imul(t ^ (t >>> 7), t | 61)));
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
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
