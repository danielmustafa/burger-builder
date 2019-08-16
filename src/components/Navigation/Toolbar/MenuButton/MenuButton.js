import React from 'react';
import classes from './MenuButton.module.css'
const MenuButton = (props) => {
    return (
        <div 
            className={classes.MenuButton}
            onClick={props.toggleMenu}>
                <div/>
                <div/>
                <div/>
        </div>
    );
};

export default MenuButton;