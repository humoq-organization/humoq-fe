import { useRouter } from "next/router";
import { injectIntl } from 'react-intl';

const LINKS = [
    {
        url: '/category/shooting',
        id: 'SHOOTING'
    },
    {
        url: '/category/arcade',
        id: 'ARCADE'
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

function Menu({ intl }) {
    const router = useRouter();
    const categoryId = router?.query?.id;

    return(
        <>
            <ul className="humoqMenu">
                {LINKS.map(val => (
                    <a className={categoryId === val?.id?.toLowerCase() ? 'humoqActiveMenu' : null} key={val?.url} href={val?.url}><li>{intl?.formatMessage({ id: val?.id })}</li></a>
                ))}
            </ul>
        </>
    )
}

export default injectIntl(Menu);