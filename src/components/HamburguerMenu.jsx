import React from 'react'

const HamburguerMenu = ({ isOpen }) => {
  return (
    <>
        <div className='hamburguer-menu'>
            <div className={`burguer ${isOpen ? "burguer1": ""}`}/>
            <div className={`burguer ${isOpen ? "burguer2": ""}`}/>
            <div className={`burguer ${isOpen ? "burguer3": ""}`}/>
        </div>
    </>
  )
}

export default HamburguerMenu
