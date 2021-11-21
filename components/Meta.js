import Head from 'next/head';

const Meta = ({title, keywords, description}) => { 

    return (
        <Head>
            <title>{title}Humoq</title>
            <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0' />
            <meta name='keywords' content={keywords} />
            <meta name='description' content={description} />
            <meta charSet='utf-8' />
            <link rel='icon' href='/favicon.ico' />
        </Head>
    )

}

Meta.defaultProps = {
    title: '', 
    keywords: 'arcade games, puzzle games, sports games, shooting games, adventure games, soccer games, multiplayer games', 
    description: 'Play free online games: arcade games, puzzle games, sports games, shooting games, and more.',
}

export default Meta;