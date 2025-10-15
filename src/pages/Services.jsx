import React from 'react'
import { useLocation } from 'react-router-dom';
import Layout from '../components/layout/Layout'

const Services = () => {

    const location = useLocation(); // Current location
    let content;

    switch (location.pathname) {
        case '/code/servicios':
            content = (
                <>
                    <li>Creación y diseño de páginas web.</li>
                    <li>Diseño y gestión de bases de datos.</li>
                    <li>Creación y consumo de API's.</li>
                    <li>Desarrollo de sistemas back-end.</li>
                    <li>Automatización de documentos.</li>
                    <li>Ciencia de datos.</li>
                    <li>Cron Jobs (Tareas programadas).</li>
                </>
            )
            break;
        case '/ambiental/servicios':
            content = (
                <>
                    <li>Asesorías sobre procesos ambientales y de consultoría.</li>
                    <li>Elaboración y revisión de informes para la autoridad (ICA's).</li>
                    {/* <li>Diseño y gestión de bases de datos.</li> */}
                    <li>Elaboración de GDB's y trabajos de geomática.</li>
                    <li>Revisión de documentos previo a su entrega con la autoridad ambiental.</li>
                    <li>Ciencia de datos.</li>
                    <li>Diseño de macros para Excel.</li>
                    <li>Diseño de sistema de gestión ambiental (SGA).</li>
                </>
            )
            break;
    };

  return (
    <Layout className="code-layout">
        <main className='container-services'>
            <h1 className='title text-center services-title'>Servicios</h1>
            <ul className='service-list mx-5 text-center'>
                {content}
            </ul>
        </main>
    </Layout>
  )
}

export default Services
