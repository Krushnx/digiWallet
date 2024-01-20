import React from 'react';

import './home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLink, faFile, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import Links from '../sections/Links';


function Home() {
    
    return (
        <div className="home">
            <div className="dashboard">
                <div className="logo centerflex">
                    <img src="https://assets.stickpng.com/images/6297319dccf362a12fe7a5de.png" alt="" />
                    <h3>LOGO</h3>
                </div>
                <div className="nav-links">
                    <a href='/login' className="items">
                        <FontAwesomeIcon icon={faLink} />
                        <span>Link</span>
                    </a>
                    <div className="items">
                        <FontAwesomeIcon icon={faFile} />
                        <span>Documents</span>
                    </div>
                    <div className="items">
                        <FontAwesomeIcon icon={faUser} />
                        <span>Profile</span>
                    </div>
                    <div className="items">
                        <FontAwesomeIcon icon={faArrowRightFromBracket} className='mirror' />
                        <span>Logout</span>
                    </div>
                </div>
            </div>
            <div className="home-content">
                <div className="sections">
                    <Links />
                </div>
            </div>
        </div>
    );
}
export default Home;