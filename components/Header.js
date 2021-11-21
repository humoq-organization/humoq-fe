import { useEffect, useState, useRef } from "react";
import Link from 'next/link'
import Image from "next/image"
import { useRouter } from "next/router";
import mainLogo from '../public/logo.png';
import Drawer from "./Drawer/Drawer";
import { server } from "../config";
import { injectIntl } from 'react-intl';

const useOnClickOutside = (ref, handler) => {
    useEffect(
        () => {
            const listener = (event) => {
                // Do nothing if clicking ref's element or descendent elements
                if (!ref.current || ref.current.contains(event.target)) {
                    return;
                }
                handler(event);
            };
            document.addEventListener("mousedown", listener);
            document.addEventListener("touchstart", listener);
            return () => {
                document.removeEventListener("mousedown", listener);
                document.removeEventListener("touchstart", listener);
            };
        },
        [ref, handler]
    );
}

const LINKS = [
    {
        url: '/category/shooting',
        id: 'SHOOTING'
    },
    {
        url: '/category/arcade',
        id: 'ARCADING'
    },
    {
        url: '/category/racing',
        id: 'RACING'
    },
    {
        url: '/category/girls',
        id: 'GIRLS'
    },
    {
        url: '/category/sports',
        id: 'SPORTS'
    },
    {
        url: '/category/action',
        id: 'ACTION'
    },
    {
        url: '/category/adventure',
        id: 'ADVENTURE'
    }
]

const ALL_LINKS = [
    {
        "id": "ADVENTURE",
        "url": "/category/adventure"
    },
    {
        "id": "ARCADE",
        "url": "/category/arcade"
    },
    {
        "id": "PUZZLE",
        "url": "/category/puzzle"
    },
    {
        "id": "MULTIPLAYER",
        "url": "/category/multiplayer"
    },
    {
        "id": "ACTION",
        "url": "/category/action"
    },
    {
        "id": "3D",
        "url": "/category/3d"
    },
    {
        "id": "RACING",
        "url": "/category/racing"
    },
    {
        "id": "SPORTS",
        "url": "/category/sports"
    },
    {
        "id": "2_PLAYER",
        "url": "/category/2-player"
    },
    {
        "id": "HYPERCASUAL",
        "url": "/category/hypercasual"
    },
    {
        "id": "IO",
        "url": "/category/io"
    },
    {
        "id": "FARMING",
        "url": "/category/farming"
    },
    {
        "id": "TOP_PICKS",
        "url": "/category/top-picks"
    },
    {
        "id": "CLICKER",
        "url": "/category/clicker"
    },
    {
        "id": "BEJEWELED",
        "url": "/category/bejeweled"
    },
    {
        "id": "SOCIAL",
        "url": "/category/social"
    },
    {
        "id": "INGAME_PURCHASE",
        "url": "/category/ingame-purchase"
    },
    {
        "id": "BOYS",
        "url": "/category/boys"
    },
    {
        "id": "GIRLS",
        "url": "/category/girls"
    },
    {
        "id": "STICKMAN",
        "url": "/category/stickman"
    },
    {
        "id": "SHOOTING",
        "url": "/category/shooting"
    },
    {
        "id": "SOCCER",
        "url": "/category/soccer"
    },
    {
        "id": "COOKING",
        "url": "/category/cooking"
    },
    {
        "id": "BABY",
        "url": "/category/baby"
    }
]


function Header({ intl }) {
    const [drawerState, setDrawerState] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    const [data, setData] = useState(null);
    const drawerRef = useRef();
    const [recent, setRecent] = useState(null);
    const [searchValue, setSearchValue] = useState(null);

    const router = useRouter();
    const categoryId = router?.query?.id;

    useEffect(() => {
        setRecent(JSON.parse(localStorage.getItem('recent')))
    }, [])

    useEffect(() => {
        if (drawerState) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
    }, [drawerState])

    useOnClickOutside(drawerRef, () => setDrawerState(false));

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY)
        }
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }

    }, [])


    const fetchSearch = (value) => {
        fetch(`${server}/search/${value || searchValue}`)
            .then(res => res.json())
            .then(res => {
                setData(res);
            })
    }

    const onSearch = (e) => {
        const value = e?.target?.value;
        if (value?.length >= 3) {
            setSearchValue(value);
            fetchSearch(value);
        }
    }

    const clickSearch = () => {
        fetchSearch();
    }

    const closeDrawer = () => {
        setDrawerState(false);
    }

    return (
        <>
            <Drawer ref={drawerRef} onClickClose={closeDrawer} active={drawerState}>
                <div className="drawerCloseIcon">
                    <img src="/close.svg" onClick={closeDrawer} />
                </div>
                <div className="searchContainer">
                    <img src="/search.svg" onClick={clickSearch} />
                    <input onChange={onSearch} className="searchInput" placeholder={intl?.formatMessage({ id: 'SEARCH' })} />
                </div>

                <div className="dataContainer jumpto">
                    <div className="dataTitle">{intl?.formatMessage({ id: 'JUMP_TO' })}</div>
                    <ul>
                        {ALL_LINKS?.map(val => (
                            <Link key={val?.url} href={val?.url}><a onClick={closeDrawer}><li>{intl?.formatMessage({id: val?.id})}</li></a></Link>
                        ))}
                    </ul>
                </div>
                <div className="dataContainer">
                    {data && data?.length > 0 && (
                        <>
                            <div className="dataTitle">{intl?.formatMessage({ id: 'PLAYING_TODAY' })}</div>
                            <div className="humoqBasicWrapper">
                                {data?.map((val) => (
                                    <Link key={val?.slug} href={`/game/${val?.slug}`}>
                                        <a onClick={closeDrawer} className="humoqColBasic">
                                            <img alt={val?.title} src={(val?.title === "Hot Dog Bush") ? val?.images[3] : val?.images[0]} width="auto" height="100%" />
                                            <div className="humoqText">{val?.title}</div>
                                        </a>
                                    </Link>
                                ))}
                            </div>
                        </>
                    )}
                    <div className="dataTitle">{intl?.formatMessage({ id: 'RECENT_PLAYED' })}</div>
                    <div className="humoqBasicWrapper">
                        {recent?.map((val) => (
                            <Link key={val?.slug} href={`/game/${val?.slug}`}>
                                <a onClick={() => setDrawerState(false)} className="humoqColBasic">
                                    <img alt={val?.title} src={(val?.title === "Hot Dog Bush") ? val?.images[3] : val?.images[0]} width="auto" height="100%" />
                                    <div className="humoqText">{val?.title}</div>
                                </a>
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="footer">
                    <div className="footerImage" />
                </div>
            </Drawer>
            <div className="humoqFixedMenu" style={{ backgroundColor: scrollY > 0 ? 'rgba(0, 0, 0, 0.6)' : 'transparent', padding: scrollY > 0 ? '5px 0' : '15px 0' }}>

                <div className="container">

                    <div className="humoqLeftSection">
                        <div className="humoqLogo">
                            <Link href="/"><a><Image src={mainLogo} width="280" height="83.5" /></a></Link>
                        </div>
                        <ul className="humoqMenu">
                            {LINKS.map(val => (
                                <Link key={val?.url} href={val?.url}><a className={categoryId === val?.id?.toLowerCase() ? 'humoqActiveMenu' : null}><li>{intl?.formatMessage({id: val?.id})}</li></a></Link>
                            ))}
                        </ul>
                    </div>
                    <ul className="humoqSearch">
                        <li><Link href="/"><a><div className="icon-home"></div></a></Link></li>
                        <li onClick={() => setDrawerState(true)}><div className="icon-search"></div></li>
                    </ul>
                </div>

                <div className="humoqMobileMenu">
                    <ul className="humoqMenu">
                        <Link href="/category/shooting"><a><li>{intl?.formatMessage({ id: 'SHOOTING' })}</li></a></Link>
                        <Link href="/category/.io"><a><li>{intl?.formatMessage({ id: 'IO' })}</li></a></Link>
                        <Link href="/category/racing"><a><li>{intl?.formatMessage({ id: 'RACING' })}</li></a></Link>
                        <Link href="/category/girls"><a><li>{intl?.formatMessage({ id: 'GIRLS' })}</li></a></Link>
                        <Link href="/category/sports"><a><li>{intl?.formatMessage({ id: 'SPORTS' })}</li></a></Link>
                        <Link href="/category/action"><a><li>{intl?.formatMessage({ id: 'ACTION' })}</li></a></Link>
                        <Link href="/category/adventure"><a><li>{intl?.formatMessage({ id: 'ADVENTURE' })}</li></a></Link>
                    </ul>
                </div>

            </div>
        </>
    )
}

export default injectIntl(Header);