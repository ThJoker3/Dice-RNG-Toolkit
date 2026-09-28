import {describe, it, expect} from 'vitest';
import {RandomGenerator} from '../src/RandomGenerator.js';

describe('RandomGenerator', () => {
  it('should generate the same sequence of numbers for the same seed', () => {
    const seed = 12345;
    const rng1 = new RandomGenerator(seed);
    const rng2 = new RandomGenerator(seed);
    const results1 = [rng1.nextFloat(), rng1.nextFloat(), rng1.nextFloat()];
    const results2 = [rng2.nextFloat(), rng2.nextFloat(), rng2.nextFloat()];
    expect(results1).toEqual(results2);
  })
})
