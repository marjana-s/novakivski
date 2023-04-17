import React from 'react';
import "./header.css";
/*import Ukraine from'./img/Ukraine.png'
import Poland from'./img/Poland.png'
import France from'./img/France.png'
import England from'./img/England.png'*/
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <body class="body">
      <div>
        <p>Новаківський</p>
        <p>SPACE</p>
      </div>
      <div class="line"></div>
      <div class="navigation">
        <Link to="/home" className='mainpage'>Головна</Link>
        <Link to="/artgaery" className='artgaery'>Арт галерея</Link>
        <Link to="/" className='mediapage'>Медіа</Link>
        <Link to="/" className='donatepage'>Донат</Link>
      </div>
      <div class="line"></div>
      <div>
        <p>світла</p>
        <label class="switch">
          <input type="checkbox"></input>
          <span class="slider round"></span>
        </label>
        <p>Тема</p>
        <select name="languages">
          <option value="1">
            Uk
          </option>
          <option value="2">
            Pl
          </option>
          <option value="3">
          Fr
          </option>
          <option value="4">
          En
          </option>
        </select>
      </div>
    </body>
  );
}