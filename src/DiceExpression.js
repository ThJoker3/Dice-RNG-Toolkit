import { Dice } from "./Dice.js";
import { RollResult } from "./RollResult.js";

const DICE_NOTATION_PATTERN = /^(?<count>\d*)d(?<sides>\d+)$/;

/**
 * Parses standard dice notation (e.g. `"3d6"`, or `"d6"` as shorthand for `"1d6"`)
 * and rolls the corresponding number of dice.
 */
export class DiceExpression {
  #count;
  #sides;

  /**
   * @param {string} notation - Dice notation, e.g. `"3d6"` or `"d20"`.
   * @throws {Error} If `notation` does not match the expected `"NdM"` format.
   */
  constructor(notation) {
    const { count, sides } = this.#parse(notation);
    this.#count = count;
    this.#sides = sides;
  }

  #parse(notation) {
    if (typeof notation !== "string") {
      throw new Error("Notation must be a string");
    }
    const match = notation.match(DICE_NOTATION_PATTERN);
    if (!match) {
      throw new Error("Invalid dice notation.")
    }
    return {
      count: Number(match.groups.count) || 1,
      sides: Number(match.groups.sides),
    }
  }  

  /**
   * Rolls all the dice described by this expression's notation.
   * @param {RandomGenerator} randomGenerator - The random generator to use for the rolls.
   * @returns {RollResult} The individual rolls and their total.
   */
  roll(randomGenerator) {
    const die = new Dice(this.#sides);
    const rolls = [];
    for (let i = 0; i< this.#count; i++) {
      rolls.push(die.roll(randomGenerator));
    }
    return new RollResult(rolls);
  }
}