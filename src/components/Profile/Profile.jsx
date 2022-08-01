import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({profile, status, updateUserStatus, savePhoto}) => {
    return (
        <>
            <ProfileInfo savePhoto={savePhoto} profile={profile} status={status} updateUserStatus={updateUserStatus} />
            <MyPostsContainer />
        </>);
}

export default Profile;