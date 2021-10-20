import React from 'react';
import { Flex } from '../Flex';
import { ReusableStaticImage } from '../ReusableStaticImage';
import style from './style.module.scss';

interface SkillBoxProps {
    data?: any;
    classes?: any;
}

export const SkillBox = (props: SkillBoxProps) => {
    const { data, classes } = props;
    return (
        <Flex center column className={`${style.box} ${classes}`}>
            <ReusableStaticImage classes={style.box_image} image={data?.image} width={data?.width} />
            <span>{data?.title}</span>
            <p>{data?.description}</p>
            <span className={style.sub_title}>{data?.subTitle}</span>
            <span className={style.skills}>{data?.skills}</span>
        </Flex>
    );
};
