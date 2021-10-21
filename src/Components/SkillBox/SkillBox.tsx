import React, { useEffect } from 'react';
import { Flex } from '../Flex';
import SR from 'scrollreveal';
import { ReusableStaticImage } from '../ReusableStaticImage';
import style from './style.module.scss';

interface SkillBoxProps {
    data?: any;
    classes?: any;
}


export const SkillBox = (props: SkillBoxProps) => {
    const { data, classes } = props;
    useEffect(() => {
        SR().reveal('#ui', { opacity: 0.2, viewFactor: 0.3, scale: 0.9, delay: 0, reset: false, distance: '50px', origin: 'left' });
        SR().reveal('#ux', { opacity: 0.2, viewFactor: 0.3, scale: 0.9, delay: 0, reset: false, distance: '50px', origin: 'left' });
        SR().reveal('#marketing', { opacity: 0.2, viewFactor: 0.3, scale: 0.9, delay: 0, reset: false, distance: '50px', origin: 'left' });
    }, [])
    return (
        <Flex id={data?.id} center column className={`${style.box} ${classes}`}>
            <ReusableStaticImage classes={style.box_image} image={data?.image} width={data?.width} />
            <span>{data?.title}</span>
            <p>{data?.description}</p>
            <span className={style.sub_title}>{data?.subTitle}</span>
            <span className={style.skills}>{data?.skills}</span>
        </Flex>
    );
};
