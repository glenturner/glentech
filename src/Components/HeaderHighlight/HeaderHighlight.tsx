import React from 'react';
import style from "./style.module.scss";

interface HeaderHighlightProps {
    classes?: any;
    background?: string;
}

export const HeaderHighlight = (props: HeaderHighlightProps) => {
    return (
        <div style={{ zIndex: 2, background: `${props.background}` && `${props.background}` }} className={`${style.headerHighlight} ${props.classes}`}></div>
    );
};

