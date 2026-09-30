import { describe, it, expect } from 'vitest';
import { RollResult } from '../src/RollResult.js';

describe('RollResult', () => {
  it('should calculate the correct total from the rolls', () => {
    const result = new RollResult([4, 2, 6]);
    expect(result.getTotal()).toBe(12);
  })

  it('should return the individual rolls', () => {
    const result = new RollResult([1, 1]);
    expect(result.getRolls()).toEqual([1, 1]);
  })
})
