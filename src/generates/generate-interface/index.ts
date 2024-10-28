import { IColumn } from '../../interfaces';
import { convertToJavascriptType } from '../../utils';

export function generateInterface(columns: IColumn[], interfaceName: string) {
  const interfaceProps = columns.map((column) => {
    return `${column.name}: ${convertToJavascriptType(column.type)}${column.required ? '' : ' | null'};`;
  });

  let interfaceGenerated = `export interface ${interfaceName} {\n`;
  interfaceGenerated += interfaceProps.join('\n');
  interfaceGenerated += '\n}';

  return interfaceGenerated;
}
