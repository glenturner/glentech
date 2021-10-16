
import React from "react"
import { useDispatch, useSelector } from 'react-redux'
import style from './style.module.scss';
import { AppState } from "../../Redux/Models";
import { ToggleMobileNavigation } from "../../Redux/Actions";

export const Hamburger = () => {
    const dispatch = useDispatch();
    const isOpen = useSelector((s: AppState) => s.utility.mobileNavOpen)
    return (
        <span className={style.container} onClick={() => dispatch(ToggleMobileNavigation(!isOpen))}>
            <div className={`${style.navIcon4} ${isOpen ? style.open : ''}`}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </span>
    );
};
