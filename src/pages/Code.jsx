import React from 'react';
import Layout from '../layout/Layout';
import presentationImage from '../assets/logo_dsrl.webp'

const Code = () => {
  return (

    <Layout className="code-layout">
      
    <main className='d-flex align-items-center'>
      <h1 className='hello py-5 text-center'>Hola mundo!<br /> Soy David Romero, desarrollador de software!</h1>
      <img className="photo w-5 rounded-circle" src={presentationImage} alt="Logo temporal"/>
    </main>

    <div className=' container-description center-block'>
      <div className='description'>

        <p className='description-content text-justify'>&gt;_ Desarrollador de software, estudiante del tecnólogo de Análisis y Desarrollo de Software (ADSO), he tenido experiencia como ingeniero ambiental en la cual he aplicado la tecnología al servicio de las necesidades de las organizaciones en las que he trabajado, enfocandome en mejorar y/o automatizar procesos.</p>

        <p className='description-content text-justify'> &gt;_ Tengo conocimientos lenguajes de programación como <span className='java knowledge'>Java</span>, <span class="c-sharp knowledge">C#</span>, <span className='javascript knowledge'>Javascript</span>, <span className='php knowledge'>PHP</span>, <span className='python1 knowledge'>Pyt</span><span className='python2 knowledge'>hon</span> así como frameworks como <span className='spring knowledge'>Spring</span>, <span class="c-sharp knowledge">.NET</span>, <span className='express knowledge'>Express.js</span>, <span className='react knowledge'>React</span> y <span class="vue1 knowledge">Vue</span><span class="vue2 knowledge">.Js</span>, <span class="tailwind knowledge">Tailwind</span> y <span class="bootstrap knowledge">Bootstrap</span> (<span className="html knowledge">HTML</span>, <span className="css knowledge">CSS</span> y <span className="sass knowledge">SASS</span>), también tengo conocimiento en diseño y gestión de bases de datos <span className='sql knowledge'>SQL</span> (MySQL y PostgreSQL) y <span className='knowledge nosql'>NoSQL</span> (MongoDB).</p>
        
        <p className='description-content text-justify'>&gt;_ Siempre curioso en aprender y como implementar la tecnología en la vida cotidiana en pro del beneficio y la eficiencia.</p>
      
      </div>
    </div>
    
    </Layout>
  )
}

export default Code
