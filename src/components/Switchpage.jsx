import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToggleSlider } from 'react-toggle-slider';
import './index.css'

const Switchpage  = () => {

  const [toggleSlider, active] = useToggleSlider({handleBackgroundColor: "#577B8D", handleBackgroundColorActive: "#DDEB9D",barBackgroundColor: "#240750" ,barBackgroundColorActive: "#A0C878"})

  const navigate = useNavigate();
  const [ state, setState ] = useState("Developer");

const handleToogleChange = (isActive) => {
    if(isActive){
        setState("Ambiental");
        navigate("/ambiental")
    } else {
        setState("Developer");
        navigate("/");
    }
}

  return (
    <div>
      <header>
        <div>
            { toggleSlider }
            {state}
        </div>

        <input type="checkbox"
        checked={active}
        onChange={(e) => handleToogleChange(e.target.checked)} />
        
      </header>
    </div>
  )
}

export default Switchpage
