import { server } from '../config/index';
import Meta from '../components/Meta';
import Menu from '../components/Menu';

export default function Index({ games }) {

    return (
        <>
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

export const getServerSideProps = async () => {
    const res = await fetch(`${server}/summary/`)
    const games = await res.json();

    return {
        props: {
            games,
        }
    }

}