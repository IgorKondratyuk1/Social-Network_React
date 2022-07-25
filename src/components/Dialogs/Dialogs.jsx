import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItems/DialogItem";
import Message from "./Message/Message";
import { Navigate } from 'react-router-dom';
import MessageForm from './MessageForm/MessageForm';

const Dialogs = (props) => {
    const dialogsElements = props.dialogsPage.dialogs.map( d => <DialogItem key={d.id} id={d.id} name={d.name}/>);
    const messagesElements = props.dialogsPage.messages.map( m => <Message key={m.id} message={m.message} userId={m.userId}/>);

    return (
        <div className="dialogs-wrapper">
            <div className={s.dialogs}>
                <div className={s.dialogs_items}>
                    {dialogsElements}
                </div>
                <div className={s.messages_items}>
                    {messagesElements}
                </div>
                <MessageForm sendMessage={props.sendMessage}/>
            </div>
        </div>
    );
}

export default Dialogs;