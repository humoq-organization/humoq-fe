import { useEffect } from "react";
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

    useEffect(() => {
        if ("serviceWorker" in navigator) {
          window.addEventListener("load", function () {
            navigator.serviceWorker.register("/sw.js").then(
              function (registration) {
                console.log(
                  "Service Worker registration successful with scope: ",
                  registration.scope
                );
              },
              function (err) {
                console.log("Service Worker registration failed: ", err);
              }
            );
          });
        }
      }, []);

    let settedLocale = "en";
    if (typeof window !== 'undefined') {
        if (window.location.origin.includes('humoq.de')) {
            settedLocale = "de";
        } else {
            settedLocale = "en";
        }
    }
    const messages = languages[settedLocale];

    return (
        <IntlProvider messages={messages} locale={locale} defaultLocale={defaultLocale}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </IntlProvider>

    )
}
