import React, { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";

export default function Card() {
  const { dark } = useContext(ThemeContext);

  return (
    <div className="card">
        <h2>Lorem Ipsum</h2>
        <p>lorem lorem lorem</p>
        <button>{!dark ? "Light theme" : "Dark Theme"}</button>
    </div>
  );
}
