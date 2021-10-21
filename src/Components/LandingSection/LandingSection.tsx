import React, { useEffect } from 'react';
import { Flex } from '../Flex';
import SR from 'scrollreveal';
import { Avatar, Landing, AppLogo } from '../../Assets';
import { ReusableStaticImage } from '../ReusableStaticImage';
import style from './style.module.scss';

export const LandingSection = () => {
    useEffect(() => {
        SR().reveal('#header', { opacity: 0.2, viewFactor: 0.3, scale: 0.9, delay: 0, reset: false, distance: '50px', origin: 'left' });
        SR().reveal('#sub_title', { opacity: 0.2, viewFactor: 0.3, scale: 0.9, delay: 0, reset: false, distance: '50px', origin: 'left' });
        SR().reveal('#avatar', { opacity: 0.2, viewFactor: 0.3, scale: 0.9, delay: 0, reset: false, distance: '50px', origin: 'up' });
    }, [])
    return (
        <Flex id="landing" column center className={style.wrapper}>
            <h3 id="header">U/I Designer, Front-end Developer, & Marketing Strategist</h3>
            <span id="sub_title" className={style.sub_title}>I design and code beautifully simple things, and I love what I do.</span>
            <ReusableStaticImage id="avatar" classes={style.avatar} image={Avatar} width={15} />
        </Flex>
    );
};
