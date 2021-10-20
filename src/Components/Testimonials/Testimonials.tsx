import React from 'react';
import { Flex } from '../Flex';
import { Author } from './Author';
import style from './style.module.scss';

export const Testimonials = () => {
    return (
        <Flex center column className={style.wrapper}>
            <h2 style={{ fontSize: '32px', color: '#201E50' }}>Testimonials</h2>
            <span style={{ margin: '0 0 30px 0', fontSize: '20px' }}>People I've worked with have said some nice things...</span>
            <Author />
        </Flex>
    );
};
