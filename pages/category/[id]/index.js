import { server } from '../../../config/index';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import Meta from '../../../components/Meta';
import Menu from '../../../components/Menu';
import { injectIntl } from 'react-intl';

function Category({ games, category, intl }) {
    const [recent, setRecent] = useState(null);
    const router = useRouter();

    useEffect(() => {
        setRecent(JSON.parse(localStorage.getItem('recent')))
    }, [])

    return (
        <>
            <Meta title={`${category.toUpperCase()} - `} />
            <div className="humoqRow">
                <div className="container">
                    <div className='mobileHomeMenu menuCategory'>
                        <Menu />
                    </div>
                    <div className='mobileCategoryScope'>
                        {recent && (
                            <div className='mobileRecentPlayed'>
                                <div className="humoqTitle">{intl?.formatMessage({ id: 'RECENT_PLAYED' })}</div>
                                <div className="humoqBasicWrapper">
                                    {recent?.map((val) => (
                                        <a key={val?.slug} href={`/game/${val?.slug}`} className="humoqColBasic">
                                            <img alt={val?.title} src={val?.thumbnail} width="auto" height="100%" />
                                            <div className="humoqText">{val?.title}</div>
                                        </a>
                                    ))}

                                </div>
                            </div>
                        )}
                        <div className='mobileCategory'>
                            <div className="humoqTitle">{category} {intl?.formatMessage({ id: 'MOST_POPULAR' })}</div>
                            <div className="humoqBasicWrapper">
                                {games?.map((game, i) => (
                                    <a key={i} href={`/game/${game?.slug}/`} className="humoqColBasic">
                                        <img alt={game?.title} src={game?.thumbnail} width="auto" height="100%" />
                                        <div className="humoqText">{game?.title}</div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export const getServerSideProps = async (context) => {
    const res = await fetch(`${server}/category/${context?.params?.id}`)
    const games = await res.json();
    const category = context.params.id;

    return {
        props: {
            games,
            category: category,
        },
    }
}

export default injectIntl(Category);