import React from 'react';
import s from './Message.module.css';

// --- Test ---
const myId = 1,
      friendId = 2;
// ------------

const Message = (props) => {
    return (
        <div className={props.userId === myId ? s.message + " " + s.right : s.message+ " " + s.left }>{props.message}</div>
    )
}

export default Message;