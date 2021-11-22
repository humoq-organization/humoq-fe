import { server } from '../../../config/index';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Meta from '../../../components/Meta';
import { injectIntl } from 'react-intl';

const Category = ({ games, category, intl }) => {
    const [recent, setRecent] = useState(null);
    useEffect(() => {
        setRecent(JSON.parse(localStorage.getItem('recent')))
    }, [])

    return (
        <>
            <Meta title={`${category.toUpperCase()} - `} />
            <div className="humoqRow">
                <div className="container">
                    {recent && (
                        <div>
                            <div className="humoqTitle">{intl?.formatMessage({ id: 'RECENT_PLAYED' })}</div>
                            <div className="humoqBasicWrapper">
                                {recent?.map((val) => (
                                    <a key={val?.slug} href={`/game/${val?.slug}`} className="humoqColBasic">
                                        <img alt={val?.title} src={(val?.title === "Hot Dog Bush") ? val?.images[3] : val?.images[0]} width="auto" height="100%" />
                                        <div className="humoqText">{val?.title}</div>
                                    </a>
                                ))}

                            </div>
                        </div>
                    )}
                    <div>
                        <div className="humoqTitle">{category} {intl?.formatMessage({ id: 'MOST_POPULAR' })}</div>
                        <div className={`${games?.length > 20 ? "humoqHomeWrapper" : "humoqBasicWrapper"}`}>
                            {games?.map((game, i) => (
                                <a key={i} href={`/game/${game?.slug}/`} className={`${games?.length > 20 ? `humoqColDetails humoqCol-${i}` : "humoqColBasic"}`}>
                                    <img alt={game?.title} src={(game?.title === "Hot Dog Bush") ? game?.images[3] : game?.images[0]} width="auto" height="100%" />
                                    <div className="humoqText">{game?.title}</div>
                                </a>
                            ))}
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