module.exports = {
    i18n: {
        locales: ['en', 'de'],
        defaultLocale: 'en',
        localeDetection: false,
        domains: [
            {
                domain: '***.com',
                defaultLocale: 'en',
            },
            {
                domain: '***.de',
                defaultLocale: 'de',
            },
        ]
    },
}
