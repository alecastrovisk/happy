import React from 'react';
import './styles/global.css';
import './styles/pages/landing.css';
import {FiArrowRight} from 'react-icons/fi';

import logoImg from './images/Logo.svg';

function App() {
  return (
    <div id="page-landing">

      <div className="content-wrapper">

        <img src={logoImg} alt="logo"></img>

        <main>
          <h1>Leve a felicidade para o mundo</h1>
          <p>Visite o orfanato e mude a vida de muitas crianças</p>
        </main>

        <div className="location">
          <strong>Maceió</strong>

          <span>Alagoas</span>
        </div>  

        <a href="" className="enter-app"> 
          <FiArrowRight size={26} color="rgba(0, 0 , 0, 0.6)"/> 
        </a>

      </div>

    </div>
  );
}

export default App;
