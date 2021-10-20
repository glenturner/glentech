import React, { useState } from 'react';
import { Flex } from '../../Flex';
import { Button } from '../../Button';
import { ReusableStaticImage } from '../../ReusableStaticImage';
import style from './style.module.scss';

interface ProjectCardProps {
    data?: any;
}

export const ProjectCard = (props: ProjectCardProps) => {
    const { data } = props;
    const [hovered, setHovered] = useState(false);
    // #141c3a
    return (
        <Flex style={{ background: !hovered ? `${data?.background}` : '#141c3a' }} center column className={style.wrapper} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            <Flex center className={style.image_wrapper}>
                {
                    hovered ?
                        <Flex column center><span className={style.description}>{data?.description}</span>
                            <Button onClick={() => window.open(data?.url, '_blank')} theme="callToActionWhite" className={style.website_btn}>
                                View Website
                            </Button>
                        </Flex>
                        : <ReusableStaticImage image={data?.logo} width={data?.width} />
                }
            </Flex>
        </Flex >
    );
};
