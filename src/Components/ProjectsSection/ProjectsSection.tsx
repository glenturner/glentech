import React from 'react';
import { Flex } from '../Flex';
import { ProjectCard } from './ProjectCard';
import { HeaderHighlight } from '../HeaderHighlight';
import { projects } from '../../Constants/Content';
import style from './style.module.scss';

export const ProjectsSection = () => {
    return (
        <Flex id="projects" center column className={style.wrapper}>
            <h2>Projects</h2>
            <HeaderHighlight />
            <p>Here are a few projects I've been fortunate enough to develop.</p>
            <Flex center className={style.cards_wrapper}>
                <Flex center wrap>
                    {projects?.map((p) => { return <ProjectCard data={p} /> })}
                </Flex>
            </Flex>
        </Flex>

    );
};
