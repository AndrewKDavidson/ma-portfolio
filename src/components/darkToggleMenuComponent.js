import React from 'react';

export const DarkToggle = ({onToggleDark}) => {
    return(
        <button className="dark-toggle menu-open-button noSelect" onClick={onToggleDark}> <i className="fa fa-lightbulb"></i> </button>    
    )
}