import React, {components} from 'react';
import {MenuItems} from './MenuItems';
import './NavBar.css'

const NavBar =()=>{
        return (
            <nav className="NavBar">
                <h1 className="navbar-logo"> <i class="fas fa-coffee"> My Profile</i></h1>
                <div className="menu-icon"></div>
                <ul className="Nav-menu">
                    { MenuItems.map((item,index)=> {
                        return (<li  key={index}><a className={item.cName} href="item.url">
                            {item.title}
                            </a></li>)
                    })}
                    
                </ul>
            </nav>
        )
    
}



export default NavBar
