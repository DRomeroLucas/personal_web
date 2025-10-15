import React from 'react'
import Layout from '../components/layout/Layout';

const Contact = () => {



  return (
    <Layout className="code-layout">
      <main className='contact-container'>
        <h1 className='title text-center'>Contacto</h1>
        <p className='contact text-center'>Puede contactarme a través del email: {location.pathname.startsWith('/code') ? <a className="email" href="mailto:dromeroldev@gmail.com">dromeroldev@gmail.com</a> : <a className="email" href="mailto:davidrlucas97@gmail.com">davidrlucas97@gmail.com</a>}</p>
        {location.pathname.startsWith('/code') ? <p className='contact text-center'>Mi Github: <a className="contact text-center" href="https://github.com/DRomeroLucas">DRomeroLucas</a> </p> : void 0}
        {/* <p className='contact text-center'>También por las redes sociales se encuentran en el pie de página ;)</p> */}
      </main>
    </Layout>
  )
}

export default Contact
