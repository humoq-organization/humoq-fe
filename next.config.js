const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === "development",
    runtimeCaching,
    buildExcludes: [
        /middleware-manifest\.json$/,
        /_middleware.js$/,
        /_middleware.js.map$/,
    ],
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
