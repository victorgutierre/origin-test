import { money } from './utils';

describe('Utils Money function', () => {
  it('Should return an empty string', () => {
    expect(money('')).toBe('');
  });

  it('Should return formated value as 25,000.00', () => {
    expect(money('25000')).toBe('25,000.00');
  });
});
