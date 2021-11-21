import { useRouter } from 'next/router';
import Layout from '../components/Layout'
import { IntlProvider } from 'react-intl';
import '../public/global.scss';

// Languages
const languages = {
    en: require('../locale/en.json'),
    de: require('../locale/de.json')
}

export default function MyApp({ Component, pageProps }) {
    const router = useRouter();
    const { locale, defaultLocale } = router;
    const messages = languages[locale];

    return (
        <IntlProvider messages={messages} locale={locale} defaultLocale={defaultLocale}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </IntlProvider>

    )
}