import React from "react";
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://ps.w.org/simple-user-avatar/assets/icon-256x256.png?rev=2413146" alt="" />
            <span>{props.message}</span>
            <div>
                <span>Likes: {props.likesCount}</span>
            </div>
        </div>
    );
}

export default Post;