import test from 'node:test';
import assert from 'node:assert/strict';
import { estimateTattooPrice } from '../src/lib/tattoo-pricing.mjs';

test('matches Apex’s published size examples at each additional-area rate', () => {
  const examples = [
    [1, 1, 299, 699], [1, 1, 399, 699], [1, 1, 499, 699],
    [2, 1, 299, 998], [2, 1, 399, 1098], [2, 1, 499, 1198],
    [2, 2, 299, 1596], [2, 2, 399, 1896], [2, 2, 499, 2196],
    [3, 3, 299, 3091], [4, 4, 399, 6684], [6, 3, 499, 9182],
  ];
  for (const [width, height, rate, expected] of examples) {
    assert.equal(estimateTattooPrice(width, height, rate)?.totalInr, expected);
  }
});

test('uses area, handles decimal dimensions and preserves the minimum', () => {
  assert.equal(estimateTattooPrice(0.5, 0.5, 499)?.totalInr, 699);
  assert.equal(estimateTattooPrice(1.1, 2, 299)?.totalInr, 1057.8);
  assert.equal(estimateTattooPrice(2, 3, 399)?.totalInr, estimateTattooPrice(3, 2, 399)?.totalInr);
  assert.equal(estimateTattooPrice(2, 2, 299)?.area, 4);
});

test('rejects invalid dimensions and unsupported legacy rates', () => {
  for (const invalid of [0, -1, NaN, Infinity, '', '2']) {
    assert.equal(estimateTattooPrice(invalid, 2, 299), null);
    assert.equal(estimateTattooPrice(2, invalid, 299), null);
  }
  assert.equal(estimateTattooPrice(2, 2, 599), null);
  assert.equal(estimateTattooPrice(1e308, 1e308, 299), null);
});
