import { validateTypeHelper } from '../../../../src/generates/generate-class/helpers';

describe('Validate Type Helper', () => {
  it('Should return validation Date when passed "Date"', () => {
    const result = validateTypeHelper('name', 'Date');
    expect(result).toStrictEqual('!(name instanceof Date)');
  });

  it('Should return validation boolean  when passed "boolean"', () => {
    const result = validateTypeHelper('name', 'boolean');
    expect(result).toStrictEqual('typeof name !== "boolean"');
  });

  it('Should return validation number  when passed "number"', () => {
    const result = validateTypeHelper('name', 'number');
    expect(result).toStrictEqual('typeof name !== "number"');
  });

  it('Should return validation string  when passed "string"', () => {
    const result = validateTypeHelper('name', 'string');
    expect(result).toStrictEqual('typeof name !== "string"');
  });
});
