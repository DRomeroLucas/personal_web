import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Code from './pages/Code.jsx';
import Environmental from './pages/Environmental.jsx';
import Contact from './pages/Contact.jsx';
import Services from './pages/Services.jsx'
import PageNotFound from './pages/PageNotFound.jsx';

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Routes>
          {/* Inicial */}
          <Route path='/' element={<Navigate to='/code'/>}/>
          {/* Developer paths */}
          <Route path='/code' element={<Code />} />
          <Route path='/code/servicios' element={<Services />}/>
          <Route path='/code/contacto' element={<Contact />}/>

          {/* Enviromental paths */}
          <Route path='/ambiental' element={<Environmental />} />
          <Route path='/ambiental/servicios' element={<Services />} />
          <Route path='/ambiental/contacto' element={<Contact />}/>

          {/* Others */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
