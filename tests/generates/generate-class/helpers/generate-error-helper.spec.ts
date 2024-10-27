import { generateErrorHelper } from '../../../../src/generates/generate-class/helpers';

describe('Generate Error Helper', () => {
  it('Should return null when passed "null"', () => {
    const result = generateErrorHelper('ANY_NAME', 'null');
    expect(result).toStrictEqual('return null');
  });

  it('Should return false when passed "false"', () => {
    const result = generateErrorHelper('ANY_NAME', 'false');
    expect(result).toStrictEqual('return false');
  });

  it('Should return true when passed "true"', () => {
    const result = generateErrorHelper('ANY_NAME', 'true');
    expect(result).toStrictEqual('return true');
  });

  it('Should return undefined when passed "undefined"', () => {
    const result = generateErrorHelper('ANY_NAME', 'undefined');
    expect(result).toStrictEqual('return undefined');
  });

  it('Should return number when passed any number', () => {
    const result = generateErrorHelper('ANY_NAME', '5');
    expect(result).toStrictEqual('return 5');
  });

  it('Should throw when passed any value includes "throw"', () => {
    const result = generateErrorHelper('ANY_NAME', 'throw new BadRequest("{{text}}")');
    expect(result).toStrictEqual('throw new BadRequest("ANY_NAME")');
  });

  it('Should return text when passed any text', () => {
    const result = generateErrorHelper('ANY_NAME', 'Bad request: {{text}}');
    expect(result).toStrictEqual('return "Bad request: ANY_NAME"');
  });
});
