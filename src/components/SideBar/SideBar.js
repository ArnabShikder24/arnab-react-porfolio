import { faFacebookSquare, faGithub, faInstagramSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faHome, faSuitcase, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './SideBar.scss';

const SideBar = () => {
    return (
        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <h1 className='logo-letter'>A</h1>
                <h2 className='subtitle'>Arnab</h2>
            </Link>
            <nav>
                <NavLink exact='true' activeclassname='active' to='/'>
                    <FontAwesomeIcon icon={faHome} color='#4d4d4e'></FontAwesomeIcon>
                </NavLink>
                <NavLink activeclassname='active' className='about-link' to='/about'>
                    <FontAwesomeIcon icon={faUser} color='#4d4d4e'></FontAwesomeIcon>
                </NavLink>
                <NavLink activeclassname='active' className='portfolio-link' to='/portfolio'>
                    <FontAwesomeIcon icon={faSuitcase} color='#4d4d4e'></FontAwesomeIcon>
                </NavLink>
                <NavLink activeclassname='active' className='contact-link' to='/contact'>
                    <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e'></FontAwesomeIcon>
                </NavLink>
            </nav>
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
        </div>
    );
};

export default SideBar;