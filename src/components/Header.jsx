import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import HamburguerMenu from './HamburguerMenu';



const Header = () => {

  const location = useLocation(); // Current location

    // Header Style
    const headerCssStyle = () => {
      if(location.pathname.startsWith('/code')) {
        return 'header-code';
      } else if(location.pathname.startsWith('/ambiental')) {
        return 'header-env';
      }
    };

    // Choose logo
    const chooseLogo = () => {
      if(location.pathname.startsWith('/code')) {
        return {logo: 'David_Romero.dev', logoStyle: 'logo', home: '/code'};
      } else if(location.pathname.startsWith('/ambiental')) {
        return {logo: 'Ing. David Romero', logoStyle: 'logo2', home: '/ambiental'};
      }
    };

    const {logo, logoStyle, home} = chooseLogo();

    // Hamburguer menu
    const [hamburguerOpen, setHamburguerOpen] = useState(false);

    const toggleHamburguer = () => {
        setHamburguerOpen(!hamburguerOpen)
    }
    
    // Redirect links
    const redirectTo = () => {
        if(location.pathname.startsWith('/code')) {
          return {service:'/code/servicios', contact:'/code/contacto', alterPage: '/ambiental', nameAltPage: 'Ambiental'};
        } else if(location.pathname.startsWith('/ambiental')) {
          return {service:'/ambiental/servicios', contact:'/ambiental/contacto', alterPage: '/code', nameAltPage: 'Programador'};
        }
      };

    const {service, contact, alterPage, nameAltPage} = redirectTo();

    const portfolio = () => {
      if(location.pathname.startsWith('/code')) {
        return <Link to='https://github.com/DRomeroLucas' className='text-navbar m-2 text-decoration-none'>Mi Portafolio</Link>;
      } else if(location.pathname.startsWith('/ambiental')) {
        return null;
      }      
    }

    // Change state of menu
    const handleResize = () => {
      if (window.innerWidth > 800) {
        setHamburguerOpen(false); // Change state to the normal state
      }
    };

    useEffect(() => {
      handleResize();

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, [])


    return(
      <div  className={`${headerCssStyle()} sticky`}> 
          <div className='d-flex p-2 align-items-center justify-content-between'>
            <Link to={home} className={logoStyle}>{logo}</Link>
            
            <div className='navigation'>
              <div className={hamburguerOpen ? 'navigation-list-normal' : 'navigation-list-none'}>
                <Link to={service} className='text-navbar m-2 text-decoration-none'>Servicios</Link>
                {portfolio()}
                <Link to={contact} className='text-navbar m-2 text-decoration-none'>Contacto</Link>
                <Link to={alterPage} className='text-navbar m-2 text-decoration-none'>{nameAltPage}</Link>
              </div>
              <div className='hamburguer-menu' onClick={toggleHamburguer}>
                <HamburguerMenu isOpen={hamburguerOpen}/>
              </div>
            </div>
            </div>
      </div>
    )
}

export default Header