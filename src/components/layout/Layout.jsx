import Header from '../Header';
import Footer from '../Footer';

function Layout({ children, className }) {
    return (
        <div className={`layout-container ${className}`}>
            <Header/>
            <main className='content'>{children}</main>
            <Footer/>
        </div>
    )
}

export default Layout;