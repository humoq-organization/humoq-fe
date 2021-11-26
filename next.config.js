const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

module.exports = withPWA({
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === "development",
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
