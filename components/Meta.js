import Head from 'next/head';
import { useRouter } from 'next/router'

const Meta = ({title, keywords, description}) => { 
    const router = useRouter();
    
    return (

        <Head>
            <title>{title}Humoq</title>
            <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0' />
            <meta name='keywords' content={keywords} />
            <meta name='description' content={description} />
            <meta charSet='utf-8' />
            
            <meta name='application-name' content='Humoq' />
            <meta name='apple-mobile-web-app-capable' content='yes' />
            <meta name='apple-mobile-web-app-status-bar-style' content='default' />
            <meta name='apple-mobile-web-app-title' content='Humoq' />
            <meta name='format-detection' content='telephone=no' />
            <meta name='mobile-web-app-capable' content='yes' />

            <link rel='apple-touch-icon' href='/icons/apple-touch-icon.png' />
            <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
            <link rel='apple-touch-icon' sizes='152x152' href='/icons/favicon-152x152.png' />
            <link rel='apple-touch-icon' sizes='167x167' href='/icons/favicon-167x167.png' />
            
            <link rel="manifest" href="/manifest.json" />
            <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
            <link rel='icon' href='/favicon.ico' />
            <meta name="theme-color" content="#005fd7" />
            <meta name="google-site-verification" content="4zFZxhkX02v30Zq9u7CuXnrMgEpjkH0vFOYkpnAv75U" />
            <meta name="yandex-verification" content="0e6d0a8bb6555cf6" />
        </Head>
    )

}

Meta.defaultProps = {
    title: '', 
    keywords: 'arcade games, puzzle games, sports games, shooting games, adventure games, soccer games, multiplayer games', 
    description: 'Play free online games: arcade games, puzzle games, sports games, shooting games, and more.',
}

export default Meta;