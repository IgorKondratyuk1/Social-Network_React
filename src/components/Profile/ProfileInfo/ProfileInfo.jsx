import React from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import userImg from "../../../assets/images/user.png";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <div>
                <img className={s.background_img} alt='logo'
                     src='https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200'/>
            </div>
            <div className={s.description_block}>
                <img src={props.profile.photos.large ? props.profile.photos.large : userImg} alt="mainPhoto" />
                <div>
                    <div>{props.profile.fullName}</div>
                    <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus} />
                    <div>{props.profile.lookingForAJob ? "I`m looking for a job. Description: " + props.profile.lookingForAJobDescription : "I`m not looking for a job."}</div>
                    <div>{props.profile.contacts.facebook}</div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;
