module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
    localeDetection: false,
  },
  localePath:
    typeof window === 'undefined'
      ? require('path').resolve('./public/locales')
      : '/locales',
  nonExplicitSupportedLngs: true,
  defaultNS: 'common',
  react: {
    useSuspense: false,
  },
}
