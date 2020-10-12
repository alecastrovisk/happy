import React from 'react';
import '../styles/pages/landing.css';
import '../styles/global.css';
import logoImg from '../images/Logo.svg';
import {FiArrowRight} from 'react-icons/fi';

import {Link} from 'react-router-dom';

function Landing() {
    return(
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

        <Link to="/app" className="enter-app"> 
          <FiArrowRight size={26} color="rgba(0, 0 , 0, 0.6)"/> 
        </Link>

      </div>

    </div>
    );
}

export default Landing;