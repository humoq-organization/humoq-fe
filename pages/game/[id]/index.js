import { server } from '../../../config/index';
import Link from 'next/link';
import { useEffect } from 'react';
import Meta from '../../../components/Meta';

const detail = ({ game }) => {
    useEffect(() => {
        const data = JSON?.parse(localStorage?.getItem('recent'));

        if (data?.length >= 6 && data?.filter(i => i?.title === game?.detail?.title)?.length === 0) {
            let temp = data;
            temp.pop();
            temp.unshift(game?.detail)

            localStorage.setItem('recent', JSON.stringify(temp));

            return;
        }

        if (data && data?.filter(i => i?.title === game?.detail?.title)?.length === 0 && data?.length !== 6) {
            const temp = data;
            temp.push(game?.detail);
            localStorage.setItem('recent', JSON.stringify(temp))
        }

        if (!data) {
            localStorage.setItem('recent', JSON.stringify([game?.detail]));
        }
    });
    return (
        <>
        <Meta title={`${game?.detail?.title} - `} description={`${game?.detail?.description?.substring(0, 130)}...`} />
        <div className="humoqRow">
            <div className="container">
                <div className="humoqHomeWrapper">
                    <div className={"humoqColDetailsIframe humoqCol-Iframe"}>
                        <iframe src={game?.detail?.url} width="870" height="430" frameBorder="0" scrolling="0" />
                    </div>
                    {game.categories?.map((game, i) => (
                        <Link key={i} href={`/game/${game?.slug}/`}>
                            <a className={"humoqColDetails humoqCol-" + i}>
                                <img alt={game?.title} src={(game?.title === "Hot Dog Bush") ? game?.images[3] : game?.images[0]} width="auto" height="100%" />
                                <div className="humoqText">{game?.title}</div>
                            </a>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
        </>
    )
}

export const getServerSideProps = async (context) => {
    const res = await fetch(`${server}/detail/${context.params.id}`)

    const game = await res.json()

    return {
        props: {
            game,
        },
    }
}

export default detail;