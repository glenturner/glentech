import React from 'react'
import { AppLogo } from '../../Assets';
import style from './style.module.scss';

export const Logo = (props: any) => {

    return (
        <div className={style.logo} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
            <img
                draggable="false"
                style={{ height: 50, width: 'auto' }}
                alt="Logo"
                src={AppLogo} />
        </div>
    )
}