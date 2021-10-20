import React from 'react';
import { Flex } from '../Flex';

export interface ReusableStaticImageProps {
    image: any;
    padding?: string;
    margin?: string;
    classes?: any;
    width?: number;
    onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
    ref?: any;
    id?: string;
}

export const ReusableStaticImage = (props: ReusableStaticImageProps) => {
    const { image, width, padding, margin, classes, onClick = () => { }, ref, id } = props;

    return (
        <Flex
            className={classes && classes}
            ref={ref}
            id={id}
            onClick={onClick}
            style={{ display: 'flex', padding: padding && `${padding}`, margin: margin && `${margin}`, boxSizing: 'border-box' }}
        >
            <img
                draggable="false"
                style={{ width: width ? `${width}rem` : '40px' }}
                alt='empty'
                src={image}
            />
        </Flex>
    );
};
