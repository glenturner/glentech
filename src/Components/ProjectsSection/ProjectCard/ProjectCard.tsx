import React, { useState, useEffect } from 'react';
import { Flex } from '../../Flex';
import { Button } from '../../Button';
import SR from 'scrollreveal';
import { ReusableStaticImage } from '../../ReusableStaticImage';
import style from './style.module.scss';

interface ProjectCardProps {
    data?: any;
}

export const ProjectCard = (props: ProjectCardProps) => {
    const { data } = props;
    const [hovered, setHovered] = useState(false);

    useEffect(() => {
        SR().reveal('#eha', { opacity: 0.2, viewFactor: 0.3, scale: 0.9, delay: 0, reset: false, distance: '50px', origin: 'up' });
        SR().reveal('#holsum', { opacity: 0.2, viewFactor: 0.3, scale: 0.9, delay: 0, reset: false, distance: '50px', origin: 'up' });
        SR().reveal('#bimbo', { opacity: 0.2, viewFactor: 0.3, scale: 0.9, delay: 0, reset: false, distance: '50px', origin: 'up' });
        SR().reveal('#wbc', { opacity: 0.2, viewFactor: 0.3, scale: 0.9, delay: 0, reset: false, distance: '50px', origin: 'up' });
        SR().reveal('#nwk', { opacity: 0.2, viewFactor: 0.3, scale: 0.9, delay: 0, reset: false, distance: '50px', origin: 'up' });
    }, [])

    return (
        <Flex id={data?.id} style={{ background: !hovered ? `${data?.background}` : '#141c3a' }} center column className={style.wrapper} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
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
