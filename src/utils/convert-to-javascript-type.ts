import { IType, ITypeValidForJavascript } from '../interfaces';

export function convertToJavascriptType(type: IType): ITypeValidForJavascript {
  switch(type) {
    case 'uuid':
      return 'string'
    case 'date':
      return 'Date'
    default:
      return type;
  }
}
