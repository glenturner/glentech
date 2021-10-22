import React, { useEffect } from 'react';
import { Flex } from '../Flex';
import { Author } from './Author';
import SR from 'scrollreveal';
import style from './style.module.scss';

export const Testimonials = () => {
    useEffect(() => {
        SR().reveal('#testimonials', { opacity: 0.2, viewFactor: 0.3, scale: 0.9, delay: 0, reset: false, distance: '50px', origin: 'left' });
    }, [])
    return (
        <Flex id="testimonials" center column className={style.wrapper}>
            <h2 style={{ fontSize: '32px', color: '#201E50' }}>Testimonials</h2>
            <span style={{ margin: '0 0 30px 0', fontSize: '20px' }}>People I've worked with have said some nice things...</span>
            <Author />
        </Flex>
    );
};
