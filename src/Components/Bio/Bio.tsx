import React from 'react';
import { Flex } from '../Flex';
import style from './style.module.scss';

export const Bio = () => {
    return (
        <Flex column center className={style.wrapper}>
            <h3>Hi, I'm Glen. Nice to meet you.</h3>
            <p>Since beginning my journey as a web developer nearly 6 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on continuing to improve my skills in design and web development one problem at a time.</p>
        </Flex>
    );
};
