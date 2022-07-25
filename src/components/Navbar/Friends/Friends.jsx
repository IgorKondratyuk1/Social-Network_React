import React from 'react';
import s from './Friends.module.css';
import {NavLink} from "react-router-dom";

const Friends = (props) => {
    const path = "/user/" + props.userId;
    return (
        <NavLink className={s.friend_item} to={path}>
            <img src={props.photo} alt="user photo"/>
            <div className={s.friend_name}>{props.name}</div>
        </NavLink>
    );
}

export default Friends;