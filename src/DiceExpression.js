import { Dice } from "./Dice.js";
import { RollResult } from "./RollResult.js";

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

  roll(randomGenerator) {
    const dice = new Dice(this.#sides);
    const rollsArray = [];
    for (let i = 0; i< this.#count; i++) {
      rollsArray.push(dice.roll(randomGenerator));
    }
    return new RollResult(rollsArray);
  }
}