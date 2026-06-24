import { buildArithmeticExpression, getBinaryConversion } from '../app/lib/mathUtils';

describe('mathUtils', () => {
  test('buildArithmeticExpression should return a string containing an operator', () => {
    const expression = buildArithmeticExpression();
    expect(typeof expression).toBe('string');
    expect(expression).toMatch(/[+\-*/\*\*]/);
  });

  test('getBinaryConversion should return an 8-bit binary string', () => {
    const binary = getBinaryConversion();
    expect(binary).toHaveLength(8);
    expect(binary).toMatch(/^[01]+$/);
  });
});
