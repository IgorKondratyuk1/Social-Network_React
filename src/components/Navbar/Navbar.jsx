import React from 'react';
import s from './Navbar.module.css';
import Friends from "./Friends/Friends";
import {NavLink} from "react-router-dom";

const Navbar = (props) => {
    const friendsElements = props.friends.map(f => <Friends key={f.id} name={f.name} photo={f.photo} userId={f.friendId}/>);

    return ( 
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/profile' className={({isActive}) => isActive ? s.activeLink : ""}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/users' className={({isActive}) => isActive ? s.activeLink : ""}>Find friends</NavLink>
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
                    { friendsElements }
                </div>
            </div>
        </nav>
    );


}

export default Navbar; 