import { connect } from "react-redux";
import UsersAPIComponent from './UsersAPIComponent';
import {follow, unfollow, setCurrentPage, requestUsers} from "../../redux/usersReducer";
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { getUsers, getPageSize, getFollowingInProcess, getCurrentPage, getIsFetching, getTotalUsersCount } from '../../redux/userSelector';

const mapStateToProps = (state) => ({
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProcess: getFollowingInProcess(state)
});

export default compose(
    connect(mapStateToProps, { follow, unfollow, setCurrentPage, requestUsers }),
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