import { ITypeValidForJavascript } from 'interfaces';

export function validateTypeHelper(prop: string, type: ITypeValidForJavascript): string {
  if (type === 'Date') {
    return `!(${prop} instanceof Date)`;
  } else {
    return `typeof ${prop} !== "${type}"`;
  }
}
