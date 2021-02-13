import React from "react";
import { IoMdMoon as Moon, IoMdSunny as Sun } from "react-icons/io";

import ThemeContext from "../contexts/ThemeContext";

function ToggleBtn() {
  const { dark, toggle } = React.useContext(ThemeContext);
  return (
    <button  onClick={() => toggle()} className="toggle-btn">
       <Sun className={`icon ${!dark ? 'active' : ''}`}/>
      <Moon className={`icon ${dark ? 'active' : ''}`}/>
    </button>
  );
}

export default ToggleBtn;
