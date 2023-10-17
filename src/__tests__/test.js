import health from '../index';

test.each([
  { name: 'мечник', health: 10, expected: 'critical' },
  { name: 'маг', health: 100, expected: 'healthy' },
  { name: 'лучник', health: 40, expected: 'wounded' },
])('health indicator check', (hero) => {
  const result = health(hero);
  expect(result).toBe(hero.expected);
});
