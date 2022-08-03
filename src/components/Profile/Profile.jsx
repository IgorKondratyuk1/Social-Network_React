import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({isOwner, profile, status, updateUserStatus, savePhoto, saveProfileData}) => {
    return (
        <>
            <ProfileInfo isOwner={isOwner} profile={profile} status={status} savePhoto={savePhoto} saveProfileData={saveProfileData} updateUserStatus={updateUserStatus} />
            <MyPostsContainer />
        </>);
}

export default Profile;