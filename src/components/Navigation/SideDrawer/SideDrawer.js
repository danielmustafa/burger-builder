import React from 'react';
import Logo from '../../Layout/Logo/Logo';
import classes from './SideDrawer.module.css'
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';

const SideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close]
    if (props.open){
        attachedClasses = [classes.SideDrawer, classes.Open]
    }

    return (
        <React.Fragment>
        <Backdrop show={props.open} modalClosed={props.closed}/>
        <div className={attachedClasses.join(' ')}>
            <div className={classes.Logo}>
                <Logo />
            </div>
            <nav>
                <NavigationItems />
            </nav>
        </div>
        </React.Fragment>
    );
};

export default SideDrawer;