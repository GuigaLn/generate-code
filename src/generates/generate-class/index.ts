import { IColumn } from '../../interfaces';
import { generateValidationItemHelper, generateValidationItemOptionalHelper } from './helpers';

export function generateClass(
  modelName: string,
  interfaceName: string,
  columns: IColumn[],
  defaultValidationError: string = 'throw new Error(\'Invalid parameter: {{text}}\')',
) {
  const classProps: string[] = [];
  const validateOptions: string[] = [];

  columns.forEach((column) => {
    classProps.push(column.name);
    if (column.required) {
      validateOptions.push(
        generateValidationItemHelper(column, defaultValidationError),
      );
    } else {
      validateOptions.push(
        generateValidationItemOptionalHelper(column, defaultValidationError),
      );
    }
  });

  let classGenerated = `export class ${modelName} {\n`;
  classGenerated += ` props: ${interfaceName};\n\n`;
  classGenerated += ' constructor({\n';
  classGenerated += `  ${classProps.join(',\n  ')}\n`;
  classGenerated += ` }: ${interfaceName}) {\n`;
  classGenerated += '  this.props = {\n';
  classGenerated += `   ${classProps.join(',\n   ')}\n`;
  classGenerated += '  }\n';
  classGenerated += '  this.validate();\n';
  classGenerated += ' }\n\n';
  classGenerated += ' validate() {\n';
  classGenerated += `${validateOptions.join('\n')}`;
  classGenerated += ' }\n';
  classGenerated += '}';

  return classGenerated;
}
