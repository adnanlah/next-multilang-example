require('dotenv').config()

module.exports = {
  reactStrictMode: true,
  env: {
    NEXT_EXAMPLE_CMS_DATOCMS_API_TOKEN:
      process.env.NEXT_EXAMPLE_CMS_DATOCMS_API_TOKEN,
  },
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'en',
  },
}
