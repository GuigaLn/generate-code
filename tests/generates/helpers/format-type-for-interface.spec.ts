import { convertToJavascriptType } from '../../../src/utils/convert-to-javascript-type'

describe('Convert To Javascript Type', () => {
  it('Should return "string" when passed "string"', () => {
    const result = convertToJavascriptType('string');

    expect(result).toStrictEqual('string');
  });

  it('Should return "number" when passed "number"', () => {
    const result = convertToJavascriptType('number');

    expect(result).toStrictEqual('number');
  });

  it('Should return "date" when passed "date"', () => {
    const result = convertToJavascriptType('date');

    expect(result).toStrictEqual('Date');
  });

  it('Should return "uuid" when passed "uuid"', () => {
    const result = convertToJavascriptType('uuid');

    expect(result).toStrictEqual('string');
  });

  it('Should return "boolean" when passed "boolean"', () => {
    const result = convertToJavascriptType('boolean');

    expect(result).toStrictEqual('boolean');
  });
})
