import get from 'lodash/get';

/**
 * The translation function
 *
 * @param  {string} namespace               Translation namespace
 * @param  {string} key                     Translation key
 * @param  {Object} [options]               Optional arguments
 * @param  {Object} [options.templateArgs]  Map of template variables to values
 * @param  {string} [options.language]      Explicitly defined language in `xx-XX`` or `xx`` form
 * @param  {Object} [options.i18n]          Store for all translations. Defaults to `window.__i18n`
 *
 * @return {string}
 */
export function translate(namespace, key, {
  language = 'en-US',
  templateArgs = {},
  i18n = window.__i18n,
} = {}) {
  /**
   * @type {string}
   */
  // Use `||` for default in case get() returns null
  let template = get(i18n, [language, namespace, key]) || key;

  Object.keys(templateArgs).forEach((variable) => {
    // Support old variable substitution, just in case.
    const oldVariablePattern = `{{${variable}}}`;
    // New substitution syntax mimics JS template strings.
    const newVariablePattern = '\\${' + variable + '}';
    const pattern = `${oldVariablePattern}|${newVariablePattern}`;
    const regex = new RegExp(pattern, 'g');
    const value = templateArgs[variable];

    template = template.replace(regex, value);
  });

  return template;
}
