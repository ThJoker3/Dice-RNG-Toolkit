import {describe, it, expect} from 'vitest';
import {RandomGenerator} from '../src/RandomGenerator.js';

describe('RandomGenerator', () => {
  it('should generate the same sequence of numbers for the same seed', () => {
    const seed = 12345;
    const rng1 = new RandomGenerator(seed);
    const rng2 = new RandomGenerator(seed);
  })
})