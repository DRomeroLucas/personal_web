import React from 'react'
import { useLocation } from 'react-router-dom'

const Footer = () => {
  const location = useLocation();

  const footerCssStyle = () => {
    if(location.pathname.startsWith('/code')) {
      return 'footer-code';
    } else if(location.pathname.startsWith('/ambiental')) {
      return 'footer-env';
    }
  };

  return (
    <footer className= {footerCssStyle()}>
      <div className='footer-text'>
        <p>Copyright © 2025 David Romero</p>
      </div>
    </footer>
  )
}

export default Footer
