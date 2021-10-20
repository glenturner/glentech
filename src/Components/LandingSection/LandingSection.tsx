import React from 'react';
import { Flex } from '../Flex';
import { Avatar, Landing, AppLogo } from '../../Assets';
import { ReusableStaticImage } from '../ReusableStaticImage';
import style from './style.module.scss';

export const LandingSection = () => {
    return (
        <Flex id="landing" column center className={style.wrapper}>
            <h3>U/I Designer, Front-end Developer, & Marketing Strategist</h3>
            <span className={style.sub_title}>I design and code beautifully simple things, and I love what I do.</span>
            <ReusableStaticImage classes={style.avatar} image={Avatar} width={15} />
        </Flex>
    );
};
