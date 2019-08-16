import React, {useState} from 'react'
import Aux from '../../hoc/Aux'
import classes from './Layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const Layout = props => {
    const [showSideDrawer, setShowSideDrawer] = useState(false)

    const sideDrawerCloseHandler = () => {
        setShowSideDrawer(!showSideDrawer)
    }

    return (
        <Aux>
        <Toolbar toggleMenu={sideDrawerCloseHandler}/>
        <SideDrawer open={showSideDrawer} closed={sideDrawerCloseHandler}/>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
    )
}

export default Layout