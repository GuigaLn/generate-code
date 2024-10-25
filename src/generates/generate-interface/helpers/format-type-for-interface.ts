import { IType } from '../../../interfaces';

export function formatTypeForInterface(type: IType) {
  switch(type) {
    case 'uuid':
      return 'string'
    case 'date':
      return 'Date'
    default:
      return type;
  }
}
