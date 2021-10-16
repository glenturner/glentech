import React from 'react';
import { Flex } from '../Flex';
import { ReusableStaticImage } from '../ReusableStaticImage';
import style from './style.module.scss';

export const SkillBox = (props: any) => {
    return (
        <Flex center column className={style.box}>
            <ReusableStaticImage classes={style.box_image} image={props.image} width={props.width} />
            <span>{props.header}</span>
            <p>{props.description}</p>
        </Flex>
    );
};
