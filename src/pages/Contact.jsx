import React from 'react'
import Layout from '../components/layout/Layout';

const Contact = () => {
  return (
    <Layout className="code-layout">
      <main className='contact-container'>
        <h1 className='title text-center'>Contacto</h1>
        <p className='contact text-center'>Puede contactarme a través del email <span className='email'>dromeroldev@gmail.com</span></p>
        {/* <p className='contact text-center'>También por las redes sociales se encuentran en el pie de página ;)</p> */}
      </main>
    </Layout>
  )
}

export default Contact
