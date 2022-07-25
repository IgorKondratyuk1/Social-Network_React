import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/profile' className={({isActive}) => isActive ? s.activeLink : ""}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs' className={({isActive}) => isActive ? s.activeLink : ""}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/news' className={({isActive}) => isActive ? s.activeLink : ""}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music' className={({isActive}) => isActive ? s.activeLink : ""}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/settings' className={({isActive}) => isActive ? s.activeLink : ""}>Settings</NavLink>
            </div>

            <div className={s.friends_block}>
                <div className={s.title}>Friends</div>
                <div className={s.friends_items}>
                    <div className={s.friend_item}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Dwayne_Johnson_2%2C_2013.jpg/640px-Dwayne_Johnson_2%2C_2013.jpg" alt="user photo"/>
                        <div className={s.friend_name}>Peter</div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar; 