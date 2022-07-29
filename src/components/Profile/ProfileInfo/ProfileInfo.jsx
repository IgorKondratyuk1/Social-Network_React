import React from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import userImg from "../../../assets/images/user.png";
import ProfileStatusHooks from "./ProfileStatusHooks";

const ProfileInfo = ({profile, status, updateUserStatus}) => {
    if (!profile) {
        return <Preloader />
    }

    return (
        <div>
            <div>
                <img className={s.background_img} alt='logo'
                     src='https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200'/>
            </div>
            <div className={s.description_block}>
                <img src={profile.photos.large ? profile.photos.large : userImg} alt="mainPhoto" />
                <div>
                    <div>{profile.fullName}</div>
                    <ProfileStatusHooks status={status} updateUserStatus={updateUserStatus} />
                    <div>{profile.lookingForAJob ? "Looking for a job. Description: " + profile.lookingForAJobDescription : "Not looking for a job."}</div>
                    <div>{profile.contacts.facebook}</div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;
