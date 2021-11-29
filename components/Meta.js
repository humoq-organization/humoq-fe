import Head from 'next/head';

const Meta = ({title, keywords, description}) => { 

    return (
        <Head>
            <title>{title}Humoq</title>
            <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0' />
            <meta name='keywords' content={keywords} />
            <meta name='description' content={description} />
            <meta charSet='utf-8' />
            <link rel="manifest" href="/manifest.json" />
            <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
            <link rel='icon' href='/favicon.ico' />
            <meta name="theme-color" content="#005fd7" />
            <meta name="google-site-verification" content="HC-OFVg-Qhmu0ZfReutqPBfqf5Rh3zivvoGZZ8wX4I0" />
        </Head>
    )

}

Meta.defaultProps = {
    title: '', 
    keywords: 'arcade games, puzzle games, sports games, shooting games, adventure games, soccer games, multiplayer games', 
    description: 'Play free online games: arcade games, puzzle games, sports games, shooting games, and more.',
}

export default Meta;