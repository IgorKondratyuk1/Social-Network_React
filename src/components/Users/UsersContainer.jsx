import React from 'react';
import { connect } from "react-redux";
import UsersAPIComponent from './UsersAPIComponent';
import {follow, unfollow, setCurrentPage, getUsers} from "../../redux/usersReducer";
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

const mapStateToProps = (state) => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProcess: state.usersPage.followingInProcess
});

export default compose(
    connect(mapStateToProps, { follow, unfollow, setCurrentPage, getUsers }),
    withAuthRedirect
)(UsersAPIComponent);

// const mapDispatchToProps = (dispatch) => {
//     return {
//         followUser: (userId) => {
//             dispatch(followUserAC(userId));
//         },
//         unfollowUser: (userId) => {
//             dispatch(unfollowUserAC(userId));
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users));
//         },
//         changePage: (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber));
//         },
//         setTotalUsersCount: (usersCount) => {
//             dispatch(setTotalUsersCountAC(usersCount));
//         },
//         setIsFetching: (isFetching) => {
//             dispatch(setIsFetchingAC(isFetching));
//         }
//     }
// };