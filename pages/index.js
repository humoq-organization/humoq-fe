import { useEffect, useState } from 'react';
import { server } from '../config/index';
import Meta from '../components/Meta';
import Menu from '../components/Menu';

export default function Index({ games, test }) {

    return (
        <>
        {console.log(test)}
        <Meta />
        <div className="humoqRow">
            <div className="container">
                <div className="humoqHomeWrapper">
                    <div className='mobileHomeMenu'>
                        <Menu />
                    </div>
                    {games?.map((game, i) => (
                        <a key={i} href={`/game/${game.slug}/`} className={"humoqCol humoqCol-" + i}>
                            <img alt={`${game.title}${i}`} src={(game.title === "Hot Dog Bush") ? game.images[3] : game.images[0]} width="auto" height="100%" />
                            <div className="humoqText">{game.title}</div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
        </>
    )
}

export const getServerSideProps = async (context) => {
    const res = await fetch(`${server}/summary/`)
    const games = await res.json();
    const test = {
        "host: ": context.req.headers.host,
        "referer: ": context.req.headers.referer,
        "rawHeader": context.req.rawHeaders,
        "url": context.req.url,
        "query": context.query,
        "resolvedUrl": context.resolvedUrl,
        "locale": context.locale,
        "defaultlocale": context.defaultLocale
    }
    console.log(test)

    return {
        props: {
            games,
            test: test,
        }
    }

}