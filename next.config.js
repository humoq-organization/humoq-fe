const withPWA = require('next-pwa')

module.exports = withPWA({
  pwa: {
    dest: 'public',
  },
  i18n: {
    locales: ['en', 'de'],
    defaultLocale: 'en',
    localeDetection: false,
    domains: [
        {
            domain: 'humoq.com',
            defaultLocale: 'en',
        },
        {
            domain: 'humoq.de',
            defaultLocale: 'de',
        },
    ]
  },
})
