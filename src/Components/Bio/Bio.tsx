import React, { useEffect } from 'react';
import { Flex } from '../Flex';
import SR from 'scrollreveal';
import style from './style.module.scss';

export const Bio = () => {
    useEffect(() => {
        SR().reveal('#about_header', { opacity: 0.2, viewFactor: 0.3, scale: 0.9, delay: 0, reset: false, distance: '50px', origin: 'left' });
        SR().reveal('#bio', { opacity: 0.2, viewFactor: 0.3, scale: 0.9, delay: 0, reset: false, distance: '50px', origin: 'left' });
    }, [])
    return (
        <Flex id="about" column center className={style.wrapper}>
            <h3 id="about_header" style={{ color: '#fff' }}>Hi, I'm Glen. Nice to meet you.</h3>
            <p id="bio">Since beginning my journey as a web developer nearly 6 years ago, I've done remote work for some great companies, and collaborated with talented people to create web applications for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on continuing to improve my skills in web development, design, and marketing one problem at a time.</p>
        </Flex>
    );
};
