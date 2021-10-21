import React, { useEffect } from 'react';
import { Flex } from '../Flex';
import SR from 'scrollreveal';
import { ProjectCard } from './ProjectCard';
import { HeaderHighlight } from '../HeaderHighlight';
import { projects } from '../../Constants/Content';
import style from './style.module.scss';

export const ProjectsSection = () => {
    useEffect(() => {
        SR().reveal('#projects', { opacity: 0.2, viewFactor: 0.3, scale: 0.9, delay: 0, reset: false, distance: '50px', origin: 'down' });
    }, [])
    return (
        <Flex id="projects" center column className={style.wrapper}>
            <h2>Projects</h2>
            <HeaderHighlight classes={style.header_accent} />
            <p>Here are a few projects I've been fortunate enough to develop.</p>
            <Flex center className={style.cards_wrapper}>
                <Flex center wrap>
                    {projects?.map((p) => { return <ProjectCard data={p} /> })}
                </Flex>
            </Flex>
        </Flex>

    );
};
