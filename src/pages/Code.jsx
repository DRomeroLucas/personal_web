import React from 'react';
import Layout from '../components/layout/Layout';
import presentationImage from '../assets/logo_dsrl.webp'

const Code = () => {
  return (

    <Layout className="code-layout">
      
    <main className='d-flex align-items-center'>
      <h1 className='hello py-5 text-center'>Hola mundo! <br /> Soy David Romero, programador!</h1>
      <img className="photo w-5 rounded-circle" src={presentationImage} alt="Logo temporal"/>
    </main>

    <div className=' container-description center-block'>
      <div className='description'>
        <p className='description-content text-justify'> &gt;_ Soy programador dedicado al desarrollo tanto de software como web, mis conocimientos abarcan lenguajes de programación como <span className='java knowledge'>Java</span>, <span className='php knowledge'>PHP</span>, <span className='python1 knowledge'>Pyt</span><span className='python2 knowledge'>hon</span>, <span className='javascript knowledge'>Javascript</span> y frameworks como <span className=' springboot knowledge'>Spring Boot</span>, <span className='react knowledge'>React</span> y <span className='vue knowledge'>Vue</span>, además de herramientas tecnológicas como <span className="html knowledge">HTML</span>, <span className="css knowledge">CSS</span> y <span className="sass knowledge">SASS</span>.</p>

        <p className='description-content text-justify'>&gt;_ Siempre curioso en aprender y como implementar la tecnología en la vida cotidiana en pro del beneficio y la eficiencia.</p>
      </div>
    </div>
    
    </Layout>
  )
}

export default Code
