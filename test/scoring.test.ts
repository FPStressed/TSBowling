import { describe, expect, test } from '@jest/globals';
import { scoreBowling } from '../src/scoring';

describe('bowling scoring module', () => {
  test('score is 0 when given a gutter game', () => {
    // Arrange
    let gutterGame = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let expectedScore = 0

    // Act
    let score = scoreBowling(gutterGame);

    // Assert
    expect(score).toBe(expectedScore);
  });
});