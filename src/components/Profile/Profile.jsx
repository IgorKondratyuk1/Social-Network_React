import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({profile, status, updateUserStatus}) => {
    return (
        <>
            <ProfileInfo profile={profile} status={status} updateUserStatus={updateUserStatus} />
            <MyPostsContainer />
        </>);
}

export default Profile;