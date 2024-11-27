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
    const propName = prop.replace('this.props.', '');

    let formattedError = defaultValidationError.replace(/"/g, '');
    formattedError = formattedError.replace('{{prop}}', `"${propName}"`);
    return formattedError;
  }

  const formattedError = defaultValidationError.replace(/"/g, '');
  return `return "${formattedError.replace('{{prop}}', prop.replace('this.props.', ''))}"`;
}
