import React, { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import { collection, getDocs } from 'firebase/firestore/lite';
import { db } from '../../firebase.init';
import './Portfolio.scss';

const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animation');
    const [portfolio, setPortfolio] = useState([]);
    const [reverse, setReverse] = useState([]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000)

        return () => {
            clearTimeout(timer);
        }
    }, [])

    useEffect(() => {
        getPortfolio();
    }, [])

    useEffect(() => {
        setReverse(portfolio.reverse());
    },[portfolio])


    const getPortfolio = async () => {
        const querySnapshort = await getDocs(collection(db, 'portfolio'));
        setPortfolio(querySnapshort.docs.map(doc => doc.data()));
    }


    const renderPortfolio = portfolio => {
        return (
            <div className='images-container'>
                {
                    portfolio.map((port, idx) => {
                        return (
                            <div className='image-box' key={idx}>
                                <img className='portfolio-image' src={port.image} alt={port.title} />
                                <div className='content'>
                                    <p className='title'>{port.name}</p>
                                    <h4 className="description">{port.description}</h4>
                                    <button onClick={() => window.open(port.url)} className="btn">View</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
    return (
        <>
            <div className="container portfolio-page">
                <h1 className='page-title'>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['P', 'o', 'r', 't', 'f', 'o', 'l', 'i', 'o']}
                        idx={15}
                    ></AnimatedLetters>
                </h1>

                <div>{renderPortfolio(reverse)}</div>
            </div>
            <Loader type='pacman'></Loader>
        </>
    );
};

export default Portfolio;