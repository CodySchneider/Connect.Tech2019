import url from 'url';

/**
 * Gets appropriately translated URL for both location-based and non-location-based pages.
 * @param  {Object}   options
 * @param  {string}   options.path                 E.g. `/${locale}/weather/today/l/${locId}`
 * @param  {string}   options.locale
 * @param  {string}   options.placeId
 * @param  {boolean}  [options.includeEnUsLocale] Bypass filtering of en-US locale from locale token
 * @param  {Object}   [options.urlConfig]         'url'-parseable  config object
 * @return {string}
 */
export function interpolateUrl({
  path,
  locale,
  placeId,
  includeEnUsLocale = false,
  urlConfig = null,
}) {
  let modifiedUrl = path;

  if (!modifiedUrl || !locale) return '';

  const language = locale.split('-')[0];

  if (modifiedUrl.includes('${locale}')) {
    if (!includeEnUsLocale && locale === 'en-US' && modifiedUrl !== '/${locale}') {
      modifiedUrl = modifiedUrl.replace('/${locale}', '');
    } else if (!includeEnUsLocale && locale === 'en-US' && modifiedUrl === '/${locale}') {
      modifiedUrl = '/';
    } else {
      modifiedUrl = modifiedUrl.replace('${locale}', locale);
    }
  }

  // Fill in `locId`, if present
  modifiedUrl = modifiedUrl.replace('${locId}', placeId);

  // Add `lang`, if present
  modifiedUrl = modifiedUrl.replace('${lang}', language);

  // Set `locale_`, if present
  modifiedUrl = modifiedUrl.replace('${locale_}', locale.replace('-', '_'));

  const urlObj = {
    ...urlConfig,
    pathname: modifiedUrl,
  };
  const formattedUrl = url.format(urlObj);

  return formattedUrl;
}
