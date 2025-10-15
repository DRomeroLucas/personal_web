import Header from '../components/Header';
import Footer from '../components/Footer';

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