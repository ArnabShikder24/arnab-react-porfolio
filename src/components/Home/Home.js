import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import Loader from 'react-loaders';
import logoU from '../../assets/images/aboutme.jpg'
import './Home.scss'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animation');
    const nameArray = ['r', 'n', 'a', 'b'];
    const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'p', 'e', 'r', '.'];

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
        <>
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>
                    <span className={letterClass}>H</span> 
                    <span className={`${letterClass} _15`}>i,</span> 
                <br />
                <span className={`${letterClass} _16`}>I</span> 
                <span className={`${letterClass} _17`}>'m</span> 
                <span className='name-letter'>A</span>
                 <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={18}></AnimatedLetters>
                <br />
                <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={22}></AnimatedLetters>
                </h1>
                <h2>MERN Stack Developer / JavaScript Expert</h2>
                <Link to='/contact' className='flat-button'>CONTACT ME</Link>
            </div>
            <div className='logo-container'>
                <img src={logoU} className='solid-logo' alt="S" />
            </div>
        </div>
        <Loader type='pacman'/>
        </>
    );
};

export default Home;