import { useEffect } from 'react';
import { useRouter } from 'next/router'
import { server } from '../../../config/index';
import Meta from '../../../components/Meta';
import Menu from '../../../components/Menu';
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, WhatsappShareButton, WhatsappIcon, PinterestShareButton, PinterestIcon } from 'next-share';

export default function Detail({ game }) {

    const router = useRouter();

    useEffect(() => {
        const handleEsc = (event) => {
           if (event.keyCode === 27 || event.keyCode === 8) {
            closeFullScreen();
           }
        };
        window.addEventListener('keydown', handleEsc);
     
        return () => {
           window.removeEventListener('keydown', handleEsc);
        };
    });

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

    const openFullscreen = () => {
        const selectIframe = document.getElementById("gameIframe");
        const closeIframe = document.getElementById("iframeClose");
        selectIframe.classList.add("fullscreen");
        closeIframe.classList.add("active");
    }

    const openMobileFullscreen = () => {
        const selectMobilePlay = document.getElementById("mobilePlay");
        const selectIframe = document.getElementById("gameIframe");
        const closeIframe = document.getElementById("iframeClose");
        selectIframe.classList.add("fullscreen");
        closeIframe.classList.add("active");
        selectMobilePlay.classList.add("false");
    }
    
    const closeFullScreen = () => {
        const selectIframe = document.getElementById("gameIframe");
        const closeIframe = document.getElementById("iframeClose")
        selectIframe.classList.remove("fullscreen");
        closeIframe.classList.remove("active");
    }

    return (
        <>
            <Meta title={`${game?.detail?.title} - `} description={`${game?.detail?.description?.substring(0, 130)}...`} image={game?.detail?.image} url={`https://humoq.com${router.asPath}`} />
            <div className="humoqRow">
                <div className="container">
                    <div className="humoqHomeWrapper humoqDetailsWrapper">
                        <div className="humoqColDetailsIframe humoqCol-Iframe">
                            <iframe id="gameIframe" src={game?.detail?.url} width="100%" height="auto" frameBorder="0" allowFullScreen scrolling="0" />
                            <div id="iframeClose" className="iframeClose" onClick={closeFullScreen}></div>
                            <div className="iframeInfo">
                                <div className="ifiLeft">
                                    <span className="ifiGameImage"><img alt={game?.detail?.title} src={game?.detail?.thumbnail} width="auto" height="100%" /></span>
                                    <span className="ifiGameText">{game?.detail?.title}</span>
                                </div>
                                <div className="ifiRight">
                                    <div className="ifiFacebook ifiSocial">
                                    <FacebookShareButton url={`https://humoq.${(router.defaultLocale == "en") ? "com" : "de"}${router.asPath}`} quote={`${game?.detail?.description}`} hashtag={'#humoq'} >
                                        <FacebookIcon size={37} round bgStyle={{fill: "#005ed0"}} />
                                    </FacebookShareButton>
                                    </div>
                                    <div className="ifiTwitter ifiSocial">
                                    <TwitterShareButton url={`https://humoq.${(router.defaultLocale == "en") ? "com" : "de"}${router.asPath}`} title={game?.detail?.title} >
                                        <TwitterIcon size={37} round bgStyle={{fill: "#005ed0"}} />
                                    </TwitterShareButton>
                                    </div>
                                    <div className="ifiWhatsapp ifiSocial">
                                    <WhatsappShareButton url={`https://humoq.${(router.defaultLocale == "en") ? "com" : "de"}${router.asPath}`} title={game?.detail?.title} separator=" : " >
                                        <WhatsappIcon size={37} round bgStyle={{fill: "#005ed0"}} />
                                    </WhatsappShareButton>
                                    </div>
                                    <div className="ifiPinterest ifiSocial">
                                    <PinterestShareButton url={`https://humoq.${(router.defaultLocale == "en") ? "com" : "de"}${router.asPath}`} media={game?.detail?.image} >
                                        <PinterestIcon size={37} round bgStyle={{fill: "#005ed0"}} />
                                    </PinterestShareButton>
                                    </div>
                                    <div className="ifiFullScreen" onClick={openFullscreen}><img src="/icon-fullscreen.png" width="35" height="35" /></div>
                                </div>
                            </div>
                            <div id="mobilePlay" className='mobilePlayButton' onClick={openMobileFullscreen} style={{backgroundImage: `url("${game?.detail?.image}")`}}>
                                <div className='bgOpacity'></div>
                                <div className='mobilePlay'><span className='mobilePlayIcon'><img src='/icon-playbutton.png' width="70" height="70" /></span>Play Now</div>
                            </div>
                        </div>
                        <div className='mobileHomeMenu menuDetail'>
                            <Menu />
                        </div>
                        <div className="mobileSocial">
                            <div className='ifiHead'>SHARE WITH FRIENDS</div>
                            <div className="ifiFacebook ifiSocial">
                            <FacebookShareButton url={`https://humoq.${(router.defaultLocale == "en") ? "com" : "de"}${router.asPath}`} quote={`${game?.detail?.description}`} hashtag={'#humoq'} >
                                <FacebookIcon size={40} round bgStyle={{fill: "#ffffff"}} />
                            </FacebookShareButton>
                            </div>
                            <div className="ifiTwitter ifiSocial">
                            <TwitterShareButton url={`https://humoq.${(router.defaultLocale == "en") ? "com" : "de"}${router.asPath}`} title={game?.detail?.title} >
                                <TwitterIcon size={40} round bgStyle={{fill: "#ffffff"}} />
                            </TwitterShareButton>
                            </div>
                            <div className="ifiWhatsapp ifiSocial">
                            <WhatsappShareButton url={`https://humoq.${(router.defaultLocale == "en") ? "com" : "de"}${router.asPath}`} title={game?.detail?.title} separator=" : " >
                                <WhatsappIcon size={40} round bgStyle={{fill: "#ffffff"}} />
                            </WhatsappShareButton>
                            </div>
                            <div className="ifiPinterest ifiSocial">
                            <PinterestShareButton url={`https://humoq.${(router.defaultLocale == "en") ? "com" : "de"}${router.asPath}`} media={game?.detail?.image} >
                                <PinterestIcon size={40} round bgStyle={{fill: "#ffffff"}} />
                            </PinterestShareButton>
                            </div>
                        </div>
                        {game.categories?.map((game, i) => (
                            <a key={i} href={`/game/${game?.slug}/`} className={"humoqColDetails humoqCol-" + i}>
                                <img alt={game?.title} src={(i <= 3) ? game.image : game.thumbnail} width="auto" height="100%" />
                                <div className="humoqText">{game?.title}</div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            <div className="humoqRow gameDetails">
                <div className="container">
                        <h1>{game?.detail?.title}</h1>
                        <p>{game?.detail?.description}</p>
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