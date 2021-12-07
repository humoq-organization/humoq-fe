import { server } from '../../../config/index';
import Link from 'next/link';
import { useEffect } from 'react';
import Meta from '../../../components/Meta';

const openFullscreen = () => {
    const selectIframe = document.getElementById("gameIframe");
    if (selectIframe.requestFullscreen) {
        selectIframe.requestFullscreen();
    } else if (selectIframe.webkitRequestFullscreen) { /* Safari */
        selectIframe.webkitRequestFullscreen();
    } else if (selectIframe.msRequestFullscreen) { /* IE11 */
        selectIframe.msRequestFullscreen();
    }
} 

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
                            <iframe id="gameIframe" src={game?.detail?.url} width="100%" height="auto" frameBorder="0" allowFullScreen webkitallowfullscreen="true" mozallowfullscreen="true" msallowfullscreen="true" scrolling="0" />
                            <div className="iframeInfo">
                                <div className="ifiLeft">
                                    <span className="ifiGameImage"><img alt={game?.detail?.title} src={(game?.detail?.title === "Hot Dog Bush") ? game?.detail?.images[3] : game?.detail?.images[0]} width="auto" height="100%" /></span>
                                    <span className="ifiGameText">{game?.detail?.title}</span>
                                </div>
                                <div className="ifiRight" onClick={openFullscreen}><img src="/icon-fullscreen.jpg" width="27" height="27" /></div>
                            </div>
                        </div>
                        {game.categories?.map((game, i) => (
                            <a key={i} href={`/game/${game?.slug}/`} className={"humoqColDetails humoqCol-" + i}>
                                <img alt={game?.title} src={(game?.title === "Hot Dog Bush") ? game?.images[3] : game?.images[0]} width="auto" height="100%" />
                                <div className="humoqText">{game?.title}</div>
                            </a>
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