import { createSelector } from 'reselect';
import { preferredLocationPlaceIdSelector } from '@wxu/contexts/src/preferred-location/selectors';
import {
  localeSelector,
} from '@wxu/contexts/src/i18n/selectors';
import { interpolateUrl } from './interpolateUrl';

/**
 * Hacky Hackiness to deal with some URLs not translated yet.
 *
 * @param  {string} locale
 */

// TODO: Remove this as soon as we have all the URLs translated
// Also need to fix registerTranslations in HeaderMobile
function mapUntranslatedUrls(locale, languageCode) {
  const enUsUrlLanguages = [
    'ar',
    'en',
    'bn',
    'cs',
    'da',
    'el',
    'et',
    'fa',
    'fi',
    'he',
    'hi',
    'hu',
    'id',
    'ja',
    'ko',
    'ms',
    'no',
    'ro',
    'ru',
    'sk',
    'sv',
    'ta',
    'tl',
    'th',
    'tr',
    'uk',
    'ur',
    'vi',
    'zh',
  ];

  if (locale === 'en-US') return locale;
  if (enUsUrlLanguages.includes(languageCode)) return 'en-CA';
  if (languageCode === 'ca') return 'ca-ES';
  if (languageCode === 'de') return 'de-DE';
  if (languageCode === 'es') return 'es-ES';
  if (languageCode === 'fr') return 'fr-FR';
  if (languageCode === 'hr') return 'hr-HR';
  if (languageCode === 'pt') return 'pt-PT';
  if (languageCode === 'sr') return 'sr-RS';
  if (languageCode === 'nl') return 'nl-NL';
  if (languageCode === 'it') return 'it';
  if (languageCode === 'jv') return 'jv';
  if (languageCode === 'pl') return 'pl';
  if (languageCode === 'sw') return 'sw';

  return locale;
}

/**
 * @param {function(string):string} t Translation function
 * @param {boolean} includeEnUsLocale By default, en-US URLs drop locale. This param forces the locale to be included.
 */
export const getUrlTranslatorSelector = (t, { includeEnUsLocale = false } = {}) => createSelector(
  localeSelector,
  preferredLocationPlaceIdSelector,
  (locale, placeId) =>
    /**
     * @param {string} key Translation key to look up
     * @param {Object} [options]
     * @param {string} [options.language] Language or locale code to get translated URL
     * @param {string} [options.interpolatedLocale] Over-ride interpolated locale
     * @param {string} [options.locId] Use locId other than the placeId
     * @param {Object} [options.urlConfig] 'url'-parseable  config object
     *
     * @returns {string} Translated URL
    */
    // eslint-disable-next-line implicit-arrow-linebreak
    function urlTranslator(
      key,
      {
        language = locale,
        interpolatedLocale = locale,
        locId = placeId,
        urlConfig = null,
      } = {}
    ) {
      const interpolatedLanguage = interpolatedLocale.split('-')[0];
      const hackedLanguage = mapUntranslatedUrls(locale, interpolatedLanguage);
      const url = t('wxu-urls', key, { language: hackedLanguage || language });
      const translatedUrl = interpolateUrl({
        path: url,
        locale: interpolatedLocale,
        placeId: locId,
        includeEnUsLocale,
        urlConfig,
      });

      return translatedUrl;
    }
);
