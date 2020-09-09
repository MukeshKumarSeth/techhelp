import React from 'react';
import logo from '../images/group.png';
import Common from './common';

const About = ()=>{
    return (
        <Common pageTitle="Welcome to about page" imgSrc={logo} btnName="Contact now" btnLink="/services" />
    )
}

export default About;