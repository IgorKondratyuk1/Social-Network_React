import React from "react";
import s from "./Users.module.css";
import Paginator from "../common/Paginator/Paginator";
import User from "./User/User";

const Users = ({users, totalUsersCount, pageSize, followingInProcess, follow, unfollow, currentPage, onPageChanged }) => {
    return (
        <div className="users">
            <div className="title">Users</div>
            <div className="users_block">
                {users.map(user => {
                    return (
                        <User user={user} followingInProcess={followingInProcess} follow={follow} unfollow={unfollow} />
                    );
                })}
            </div>
            <Paginator totalItemsCount={totalUsersCount} pageSize={pageSize} currentPage={currentPage} onPageChanged={onPageChanged} />
        </div>
    );
}

export default Users;