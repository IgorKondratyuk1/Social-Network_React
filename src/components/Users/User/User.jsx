import React from "react";
import s from "./User.module.css";
import userImg from "../../../assets/images/user.png";
import { NavLink } from "react-router-dom";

const User = ({ user, followingInProcess, follow, unfollow }) => {
    return (
        <div className={s.user} key={user.id}>
            <div>
                <NavLink to={"/profile/" + user.id}>
                    <div>
                        <img src={(!!user.photos.small) ? user.photos.small : userImg} alt="user-icon" className={s.user_photo}/>
                    </div>
                </NavLink>

                <div>
                    {user.followed
                        ? <button disabled={followingInProcess.some((id) => id === user.id)}
                            onClick={() => {unfollow(user.id)}}>Unfollow</button>
                        : <button disabled={followingInProcess.some((id) => id === user.id)}
                            onClick={() => {follow(user.id)}}>Follow</button>
                    }
                </div>
            </div>
            
            <div className={s.user_info}>
                <div>{user.name}</div>
                <div>{user.status}</div>
                <div>user.location.country</div>
                <div>user.location.city</div>
            </div>
        </div>
    );
}

export default User;