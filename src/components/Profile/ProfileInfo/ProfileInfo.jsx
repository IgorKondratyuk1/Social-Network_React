import React, { useState } from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import userImg from "../../../assets/images/user.png";
import ProfileStatus from "./ProfileStatus";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({isOwner, profile, status, updateUserStatus, savePhoto, saveProfileData}) => {
    let [editMode, setEditMode] = useState(false);

    const onProfilePhotoChange = (e) => {
        if (e.target.files.length > 0) {
            savePhoto(e.target.files[0]);
        }
    }

    if (!profile) {
        return <Preloader />
    }

    return (
        <div>
            <div>
                <img className={s.background_img} alt='logo'
                     src='https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200'/>
                {isOwner && <input type="file" onChange={onProfilePhotoChange}/>}
            </div>
            <div className={s.description_block}>
                <img src={profile.photos.large ? profile.photos.large : userImg} alt="mainPhoto" />
                <div>
                    <ProfileStatus isOwner={isOwner} status={status} updateUserStatus={updateUserStatus} />
                    { editMode 
                        ? <ProfileDataForm profile={profile} exitFromEditMode={() => {setEditMode(false)}} saveProfileData={saveProfileData} /> 
                        : <ProfileData profile={profile} isOwner={isOwner} goToEditMode={() => {setEditMode(true)}} />}
                </div>
            </div>
        </div>
    )
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return (
        <div>
            <div>{profile.fullName}</div>
            <div>
                <span className="">About me: </span> 
                <span>{profile.aboutMe}</span>
            </div>
            <div>
                <span>Looking for a job: </span> 
                <span>{profile.lookingForAJob ? "yes" : "no"}</span>
            </div>
            <div>
                <span>Skills description: </span>
                {profile.lookingForAJob && <span>{profile.lookingForAJobDescription}</span>}
            </div>
            { Object.keys(profile.contacts).map(key => <Contacts key={key} contactKey={key} contactValue={profile.contacts[key]}/>) }
            { isOwner && <button onClick={goToEditMode}>change info</button> }
        </div>
    );
}

const Contacts = ({contactKey, contactValue}) => {
    return (
        <div className={s.contacts} key={contactKey}>
            <span className="contact_title">{contactKey}: </span> 
            <span className="contact_description">{contactValue}</span>
        </div>
    );
}

export default ProfileInfo;