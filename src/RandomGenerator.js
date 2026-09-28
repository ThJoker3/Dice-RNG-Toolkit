class RandomGenerator {
  #state;

  constructor(seed = Date.now()) {
    this.reset(seed);
  }

  reset(seed) {
    if (!Number.isInteger(seed)) {
      throw new Error("Seed must be an integer");
    }
    this.#state = seed | 0;
  }

  nextFloat() {
    this.#state = (this.#state + 0x6D2B79F5) | 0;
    let t = this.#state;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t = (t ^ (t + Math.imul(t ^ (t >>> 7), t | 61)));
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  }
}
