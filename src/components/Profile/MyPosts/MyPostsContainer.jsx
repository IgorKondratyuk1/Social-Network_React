import React from "react";
import { connect } from "react-redux";
import MyPost from "./MyPosts";
import { addPost } from "../../../redux/profileReducer";

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         addPost: () => {
//             dispatch(addPostActionCreator());
//         },
//         removePost: () => {
//             dispatch(updateNewPostTextActionCreator(""));
//         },
//         changePostText: (text) => {
//             dispatch(updateNewPostTextActionCreator(text));
//         }
//     }
// }

const MyPostsContainer = connect(mapStateToProps, { addPost })(MyPost);

export default MyPostsContainer;