// eslint-disable-next-line import/extensions, import/named
import { healthColorIndicator, sortHealth } from '../app';

// eslint-disable-next-line no-undef
test.each([
  [{ name: 'Маг', health: 90 }, 'healthy'],
  [{ name: 'Лучник', health: 45 }, 'wounded'],
  [{ name: 'Танк', health: 5 }, 'critical'],
  [{ name: 'Черный маг', health: 50 }, 'wounded'],
  [{ name: 'Леший', health: 15 }, 'critical'],
])('проверка цветовой индикации здоровья', (object, expectedResult) => {
  const result = healthColorIndicator(object);
  expect(result).toBe(expectedResult);
});

test('test sorting feature', () => {
  const objectList = [
    { name: 'мечник', health: 20 },
    { name: 'леший', health: 100 },
    { name: 'танк', health: 10 },
    { name: 'лучник', health: 80 },
  ];
  const expectedResult = [
    { name: 'леший', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 20 },
    { name: 'танк', health: 10 },
  ];
  const result = sortHealth(objectList);
  expect(result).toEqual(expectedResult);
});
