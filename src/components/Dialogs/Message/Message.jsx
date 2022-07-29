import React from 'react';
import s from './Message.module.css';

// --- Test ---
const myId = 1,
      friendId = 2;
// ------------

const Message = ({userId, message}) => {
    return (
        <div className={userId === myId ? s.message + " " + s.right : s.message+ " " + s.left }>{message}</div>
    )
}

export default Message;