import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/home_img2.png';
import Common from './common';

const Home = ()=>{
    return (
       <>
            <Common pageTitle="Grow your business with" imgSrc={logo} btnName="Get Started" btnLink="/services" />
       </>
    )
}

export default Home;