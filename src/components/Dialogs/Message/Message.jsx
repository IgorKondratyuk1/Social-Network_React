import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    const path = "/dialogs/" + props.id;

    //Active class: {s.dialog + " " + s.active}
    return (
        <div className={s.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    const dialogs = [
        {id: 1, name: "Tom"},
        {id: 2, name: "Jack"},
        {id: 3, name: "Liza"},
        {id: 4, name: "Andrew"},
        {id: 5, name: "Viktor"},
    ];

    const messages = [
        {id: 1, message: "Hi"},
        {id: 2, message: "Hello"},
        {id: 3, message: "How are you?"},
    ];

    const dialogsElements = dialogs.map( d => <DialogItem id={d.id} name={d.name}/>);
    const messagesElements = messages.map( m => <Message message={m.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                { dialogsElements }
            </div>
            <div className={s.messages_items}>
                { messagesElements }
            </div>
        </div>
    );
}

export default Dialogs;