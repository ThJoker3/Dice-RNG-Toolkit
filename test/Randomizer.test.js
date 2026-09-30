import { describe, it, expect } from 'vitest';
import { Randomizer } from '../src/Randomizer.js'
import { RandomGenerator } from '../src/RandomGenerator.js';

describe('Randomizer', () => {
  it('should return an element that exists in the array', () => {
    const randomizer = new Randomizer();
    const rng = new RandomGenerator();
    const array = ['a', 'b', 'c'];
    const picked = randomizer.pick(array, rng);
    expect(array).toContain(picked);
  })

  it('should throw an error if the array is empty', () => {
    const randomizer = new Randomizer();
    const rng = new RandomGenerator();
    expect(() => randomizer.pick([], rng)).toThrow("Array must not be empty");
  })

  it('should throw an error if the argument is not an array', () => {
    const randomizer = new Randomizer();
    const rng = new RandomGenerator();
    expect(() => randomizer.pick(rng)).toThrow("Argument must be an array")
  })

  it('should return an array with the same elements as the original', () => {
    const randomizer = new Randomizer();
    const rng = new RandomGenerator(1);
    const original = [1, 2, 3, 4, 5];
    const shuffled = randomizer.shuffle(original, rng);
    expect([...shuffled].sort()).toEqual([...original].sort());
  })

  it('should not mutate the original array', () => {
    const randomizer = new Randomizer();
    const rng = new RandomGenerator(1);
    const original = [1, 2, 3, 4, 5];
    const before = [...original];
    randomizer.shuffle(original, rng);
    expect(original).toEqual(before);
  })
})