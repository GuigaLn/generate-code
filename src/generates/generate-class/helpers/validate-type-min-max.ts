import { ITypeValidForJavascript } from 'interfaces';

export function validateMinMaxHelper(
  prop: string,
  type: ITypeValidForJavascript,
  min?: number,
  max?: number,
): string {
  let validation = '';

  if (type === 'number') {
    if (min) {
      validation += ` || ${prop} < ${min}`;
    }
    if (max) {
      validation += ` || ${prop} > ${max}`;
    }
  }

  if (type === 'string') {
    if (min) {
      validation += ` || ${prop}.length < ${min}`;
    }
    if (max) {
      validation += ` || ${prop}.length > ${max}`;
    }
  }

  return validation;
}
