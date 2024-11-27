import { IColumn } from '../../../interfaces';
import {
  generateErrorHelper,
  validateTypeHelper,
  validateMinMaxHelper,
} from './';
import { convertToJavascriptType } from '../../../utils';

export function generateValidationItemOptionalHelper(
  column: IColumn,
  defaultValidationError: string,
) {
  const prop = `this.props.${column.name}`;
  const typeForJavascript = convertToJavascriptType(column.type);

  let option = `if (${prop} && (${validateTypeHelper(prop, typeForJavascript)}`;
  option += validateMinMaxHelper(prop, typeForJavascript, column.min, column.max);
  option += ')) {';
  option += generateErrorHelper(prop, defaultValidationError);
  option += '}';

  return option;
}
