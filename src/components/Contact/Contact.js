import React, { useEffect, useRef, useState } from 'react';
import Loader from 'react-loaders';
import './Contact.scss';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import emailJs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animation');
    const refForm = useRef();

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])
    
    const sendEmail = e => {
        e.preventDefault();
        // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')

        emailJs
            .sendForm(
                'service_hhe869q',
                'template_pd7qzmj',
                refForm.current,
                'n4bVAljBMjSATDIm1'
            )
            .then(
                () => {
                    alert('Message Successfully Sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send the message, Please try again')
                }
            )
    }
    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
                        idx={15}
                    />
                </h1>
                <p>
                I am interested in freelance opportunities - especially ambitious or
                large projects. However, if you have other request or question,
                don't hesitate to contact me using below form either.
                </p>
                <div className="contact-form">
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type="text" name='name'  placeholder='Name' required/>
                            </li>
                            <li className='half'>
                                <input type="email" name='email'  placeholder='Email' required/>
                            </li>
                            <li>
                                <input type="text" name='subject'  placeholder='Subject' required/>
                            </li>
                            <li>
                                <textarea name='message'  placeholder='Message' required/>
                            </li>
                            <li>
                                <input type="submit" className='flat-button' value="SEND" />
                            </li>
                        </ul>
                    </form>
                </div>
                </div>
                <div className='info-map'>
                    Arnab Shikder
                    <br />
                    Bangladesh
                    <br />
                    Agrabad, Chittagong
                    <br />
                    <span>arnabshikder2001@gmail.com</span>
                </div>
                <div className='map-wrap'>
                    <MapContainer center={[22.324317325298413, 91.80866870941782]} zoom={15} scrollWheelZoom={true}>
                        <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'/>
                        <Marker position={[22.324317325298413, 91.80866870941782]}>
                            <Popup>Welcome to my office</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type='pacman'/>
        </>
    );
};

export default Contact;