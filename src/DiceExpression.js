export class DiceExpression {
  #count;
  #sides;

  constructor(notation) {
    const match = notation.match(/^(\d*)d(\d+)$/);
    if (!match) {
      throw new Error("Invalid dice notation.");
    }
    this.#count = Number(match[1]) ? Number (match[1]) : 1;
    this.#sides = Number(match[2]);
  }
}