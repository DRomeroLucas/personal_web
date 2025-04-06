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
    <footer className= {`${footerCssStyle()} mt-auto d-flex justify-content-center align-self-center`}>
      <p className=' p-4'>Copyright © 2025 David Romero</p>
    </footer>
  )
}

export default Footer
