const withPWA = require('next-pwa')

module.exports = withPWA({
  pwa: {
    disable: 'development',
    // dest: 'public', // comment out this line
    register: true,
    sw: '/sw.js',
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
