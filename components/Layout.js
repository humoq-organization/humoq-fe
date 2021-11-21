import Header from './Header';
import Meta from './Meta';

const Layout = ({ children }) => {
    return(
        <>
            <Meta />
            <Header />
            <main>{children}</main>
        </>
    )
}



export default Layout;