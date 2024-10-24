import { IColumn } from '../interfaces';
import { formatTypeForInterface } from '../utils';

export function generateInterface(columns: IColumn[], interfaceName: string) {
  const interfaceProps = columns.map((column) => {
    return `${column.name}: ${formatTypeForInterface(column.type)}${column.required ? '' : ' | null'};`;
  });

  let interfaceGenerated = `export interface ${interfaceName} {\n`;
  interfaceGenerated += interfaceProps.join('\n');
  interfaceGenerated += '\n}';

  return interfaceGenerated;
}
