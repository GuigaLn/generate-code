export function generateErrorHelper(
  prop: string,
  defaultValidationError: string,
) {
  if (
    ['null', 'false', 'true', 'undefined'].includes(defaultValidationError) ||
    Number(defaultValidationError)
  ) {
    return `return ${defaultValidationError}`;
  }

  if (defaultValidationError.includes('throw')) {
    return defaultValidationError.replace(
      '{{text}}',
      prop.replace('this.props.', ''),
    );
  }

  return `return "${defaultValidationError.replace('{{text}}', prop.replace('this.props.', ''))}"`;
}
