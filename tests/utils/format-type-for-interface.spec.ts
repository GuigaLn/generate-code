import { formatTypeForInterface } from '../../src/generates/generate-interface/helpers'

describe('Format Type For Interface', () => {
  it('Should return "string" when passed "string"', () => {
    const result = formatTypeForInterface('string');

    expect(result).toStrictEqual('string');
  });

  it('Should return "number" when passed "number"', () => {
    const result = formatTypeForInterface('number');

    expect(result).toStrictEqual('number');
  });

  it('Should return "date" when passed "date"', () => {
    const result = formatTypeForInterface('date');

    expect(result).toStrictEqual('Date');
  });

  it('Should return "uuid" when passed "uuid"', () => {
    const result = formatTypeForInterface('uuid');

    expect(result).toStrictEqual('string');
  });

  it('Should return "boolean" when passed "boolean"', () => {
    const result = formatTypeForInterface('boolean');

    expect(result).toStrictEqual('boolean');
  });
})
