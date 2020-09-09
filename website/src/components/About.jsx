import React from 'react';
import logo from '../images/home_img2.png';
import Common from './common';

const About = ()=>{
    return (
        <Common pageTitle="Welcome to about page" imgSrc={logo} btnName="Contact now" btnLink="/services" />
    )
}

export default About;