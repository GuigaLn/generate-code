import { IColumn } from '../../src/interfaces';
import { validateColumns } from '../../src/utils/validate-column'

describe('Validate Columns', () => {
  it('Should return errors for invalid column definitions', () => {
    const columns: IColumn[]  = [
      {
        name: false as any,
        required: 'ANY_REQUIRED' as any,
        type: 'ANY_TYPE' as any,
        autoGenerated: 'ANY_GENERATE' as any,
        min: 'ANY_MIN' as any,
        max: 'ANY_MAX' as any,
        defaultValue: new Date('1900-01-01 00:00:00') as any,
      }
    ];

    const result = validateColumns(columns);

    const expcted = [
      {
        name: 'false',
        errors: [
          'Invalid type for name: false',
          'Invalid type: ANY_TYPE',
          'Invalid type for required: ANY_REQUIRED',
          'Invalid type for autoGenerated: ANY_GENERATE',
          'Invalid type for min: ANY_MIN',
          'Invalid type for max: ANY_MAX',
          'min should be less than max: min=ANY_MIN, max=ANY_MAX',
          'Invalid type for defaultValue: Mon Jan 01 1900 00:00:00 GMT-0306 (Brasilia Standard Time)'
        ]
      }
    ];

    expect(result).toStrictEqual(expcted);
  });

  it('Should return errors for missing column definitions', () => {
    const columns: IColumn[]  = [{} as any];

    const result = validateColumns(columns);

    const expcted = [
      {
        name: 'undefined',
        errors: [
          'Invalid type for name: undefined',
          'Invalid type: undefined',
          'Invalid type for required: undefined',
        ]
      }
    ];

    expect(result).toStrictEqual(expcted);
  });

  it('Should return empty errors for valid column definitions', () => {
    const columns: IColumn[]  = [
      {
        name: 'ANY_NAME',
        required: false,
        type: 'string',
        autoGenerated: false,
        min: 0,
        max: 1,
        defaultValue: 'ANY_DEFAULT'
      },
    ];

    const result = validateColumns(columns);

    expect(result).toStrictEqual([]);
  });
})
