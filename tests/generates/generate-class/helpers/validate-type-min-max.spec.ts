import { validateMinMaxHelper } from '../../../../src/generates/generate-class/helpers';

describe('Validate Min Max Helper', () => {
  it('Should return both min and max for number type when both are provided', () => {
    const result = validateMinMaxHelper('prop', 'number', 5, 4);
    expect(result).toStrictEqual(' || prop < 5 || prop > 4');
  });

  it('Should return only min for number type when max is not provided', () => {
    const result = validateMinMaxHelper('prop', 'number', 5, undefined);
    expect(result).toStrictEqual(' || prop < 5');
  });

  it('Should return only max for number type when max is not provided', () => {
    const result = validateMinMaxHelper('prop', 'number', undefined, 4);
    expect(result).toStrictEqual(' || prop > 4');
  });

  it('Should return empty string for number type when no min and max is provided', () => {
    const result = validateMinMaxHelper('prop', 'number', undefined, undefined);
    expect(result).toStrictEqual('');
  });

  it('Should return both min and max for string type when both are provided', () => {
    const result = validateMinMaxHelper('prop', 'string', 5, 4);
    expect(result).toStrictEqual(' || prop.length < 5 || prop.length > 4');
  });

  it('Should return only min for string type when max is not provided', () => {
    const result = validateMinMaxHelper('prop', 'string', 5, undefined);
    expect(result).toStrictEqual(' || prop.length < 5');
  });

  it('Should return only max for string type when max is not provided', () => {
    const result = validateMinMaxHelper('prop', 'string', undefined, 4);
    expect(result).toStrictEqual(' || prop.length > 4');
  });

  it('Should return empty string for string type when no min and max is provided', () => {
    const result = validateMinMaxHelper('prop', 'string', undefined, undefined);
    expect(result).toStrictEqual('');
  });

  it('Should return empty string for Date type', () => {
    const result = validateMinMaxHelper('prop', 'Date', 5, 4);
    expect(result).toStrictEqual('');
  });

  it('Should return empty string for boolean type', () => {
    const result = validateMinMaxHelper('prop', 'boolean', 5, 4);
    expect(result).toStrictEqual('');
  });
});
