import React from 'react';
import logo from '../images/logo.svg';
import Common from './common';

const Home = ()=>{
    return (
       <>
            <Common pageTitle="Grow your business with" imgSrc={logo} btnName="Get Started" btnLink="/services" />
       </>
    )
}

export default Home;