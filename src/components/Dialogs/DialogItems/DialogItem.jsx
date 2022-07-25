import React from 'react';
import s from './DialogItem.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    const path = "/dialogs/" + props.id;

    return (
        <div className={s.dialog}>
            <img className={s.dialog_photo} src="https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person.jpg" alt="User img"/>
            <NavLink className={({ isActive }) => isActive ? s.activeLink : ""} to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;