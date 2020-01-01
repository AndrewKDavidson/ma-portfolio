import React from 'react';
import { DarkToggle } from './darkToggleMenuComponent';

export const GooeyMenu = ({onToggleDark}) => {
    return(
        <nav className="menu noSelect">
            <input type="checkbox" href="#" className="menu-open" name="menu-open" id="menu-open"/>
            <label className="menu-open-button" htmlFor="menu-open">
                <span className="hamburger hamburger-1"></span>
                <span className="hamburger hamburger-2"></span>
                <span className="hamburger hamburger-3"></span>
            </label>
            
            <a href="#" className="menu-item"> <i className="fa fa-home"></i> </a>
            <a href="#" className="menu-item"> <i className="fa fa-phone"></i> </a>
            <a href="#" className="menu-item"> <i className="fa fa-project-diagram"></i> </a>
            <DarkToggle onToggleDark={onToggleDark} />
        </nav>
    )
}