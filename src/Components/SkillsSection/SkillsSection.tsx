import React from 'react';
import { SkillBox } from '../SkillBox';
import { Flex } from '../Flex';
import { skills } from '../../Constants/Content';
import style from './style.module.scss';

export const SkillsSection = () => {
    return (
        <Flex className={style.section}>
            {skills?.map((s: any) => { return <SkillBox classes={style.box} data={s} /> })}
        </Flex>
    );
};
