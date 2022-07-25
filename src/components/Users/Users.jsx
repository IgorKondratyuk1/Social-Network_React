import React from "react";
import s from "./Users.module.css";
import userImg from "../../assets/images/user.png";
import { NavLink } from "react-router-dom";

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div className="users">
            <div className="title">Users</div>
            <div className="users_block">
                {props.users.map(u => {
                    return (
                        <div className={s.user} key={u.id}>
                            <div>
                                <NavLink to={"/profile/" + u.id}>
                                    <div>
                                        <img src={(!!u.photos.small) ? u.photos.small : userImg} alt="user-icon" className={s.user_photo}/>
                                    </div>
                                </NavLink>

                                <div>
                                    {u.followed
                                        ? <button disabled={props.followingInProcess.some((id) => id === u.id)}
                                            onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
                                        : <button disabled={props.followingInProcess.some((id) => id === u.id)}
                                            onClick={() => {props.follow(u.id)}}>Follow</button>
                                    }
                                </div>
                            </div>
                            
                            <div className={s.user_info}>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                                <div>u.location.country</div>
                                <div>u.location.city</div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div>
                {pages.map(p => {
                    return <button key={p} className={p === props.currentPage ? s.selected_page : ""}
                                   onClick={() => {props.onPageChanged(p)}}>{p}</button>
                })}
            </div>
        </div>
    );
}

export default Users;