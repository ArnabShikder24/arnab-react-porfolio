import { faFacebookSquare, faGithub, faInstagramSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBars, faClose, faEnvelope, faHome, faSuitcase, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './SideBar.scss';

const SideBar = () => {
    const [showNav, setShowNav] = useState(false);
    return (
        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <h1 className='logo-letter'>A</h1>
                <h2 className='subtitle'>Arnab</h2>
            </Link>
            {
                showNav &&
                (
                <nav className={showNav ? 'mobile-show' : ''}>
                    <NavLink exact='true' activeclassname='active' onClick={() => setShowNav(false)} to='/'>
                        <FontAwesomeIcon icon={faHome} color='#4d4d4e'></FontAwesomeIcon>
                    </NavLink>
                    <NavLink activeclassname='active' onClick={() => setShowNav(false)} className='about-link' to='/about'>
                        <FontAwesomeIcon icon={faUser} color='#4d4d4e'></FontAwesomeIcon>
                    </NavLink>
                    <NavLink activeclassname='active' onClick={() => setShowNav(false)} className='portfolio-link' to='/portfolio'>
                        <FontAwesomeIcon icon={faSuitcase} color='#4d4d4e'></FontAwesomeIcon>
                    </NavLink>
                    <NavLink activeclassname='active' onClick={() => setShowNav(false)} className='contact-link' to='/contact'>
                        <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e'></FontAwesomeIcon>
                    </NavLink>
                    <FontAwesomeIcon
                        onClick={() => setShowNav(false)}
                        icon={faClose}
                        color='#ffd700'
                        size='3x'
                        className='close-icon'
                    />
                </nav>
                )
            }
            <ul>
                <li>
                    <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/arnab-shikder-7293a222a/'>
                        <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e'></FontAwesomeIcon>
                    </a>
                </li>
                <li>
                    <a target='_blank' rel='noreferrer' href='https://github.com/ArnabShikder24'>
                        <FontAwesomeIcon icon={faGithub} color='#4d4d4e'></FontAwesomeIcon>
                    </a>
                </li>
                <li>
                    <a target='_blank' rel='noreferrer' href='https://www.facebook.com/Arnab-Shikder-130243577581295'>
                        <FontAwesomeIcon icon={faFacebookSquare} color='#4d4d4e'></FontAwesomeIcon>
                    </a>
                </li>
                <li>
                    <a target='_blank' rel='noreferrer' href='https://www.instagram.com/arnabshikder360/'>
                        <FontAwesomeIcon icon={faInstagramSquare} color='#4d4d4e'></FontAwesomeIcon>
                    </a>
                </li>
            </ul>
            <FontAwesomeIcon
                onClick={() => setShowNav(true)}
                icon={faBars}
                color='#ffd700'
                size='3x'
                className='hamburger-icon'
            />
        </div>
    );
};

export default SideBar;