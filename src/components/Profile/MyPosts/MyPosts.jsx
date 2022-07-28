import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import PostForm from "./PostForm/PostForm";

const MyPosts = React.memo(function (props){
    const postsElements = [...props.posts]
                            .reverse() 
                            .map( p => <Post key={p.id} likesCount={p.likesCount} message={p.message}/>);

    return (
        <div className={s.posts_block}>
            <div>My post</div> 
            <PostForm addPost={props.addPost} />
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
});

export default MyPosts;