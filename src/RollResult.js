export class RollResult {
  #rolls;

  constructor(rolls) {
    this.#rolls = rolls;
  }

  getRolls() {
    return [...this.#rolls];
  }

  getTotal() {
    return this.#rolls.reduce((total, roll) => total + roll, 0);
  }

  toString() {
    return `Rolls: [${this.#rolls.join(", ")}], Total: ${this.getTotal()}`;
  }
}