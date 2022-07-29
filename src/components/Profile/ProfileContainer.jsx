import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfile, getUserStatus, updateUserStatus } from "../../redux/profileReducer";
import { withRouter } from "../../hoc/withRouter";
import { compose } from "redux";

class ProfileContainer extends React.Component {
    
    componentDidMount = () => {
        const {router, authorizedUserId, getUserProfile, getUserStatus} = this.props;
        let userId = router.params.userId;

        if(!userId) { 
            userId = authorizedUserId;

            if (!userId) {
                window.location = "/login";
            }
        }
        getUserProfile(userId);
        getUserStatus(userId);
    }

    render = () => {
        return <Profile {...this.state} profile={this.props.profile} status={this.props.status} updateUserStatus={this.props.updateUserStatus} />;
    }
}

const mapStateToProps = (state) => ({
    authorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth,
    profile: state.profilePage.profile,
    status: state.profilePage.status
});

export default compose(
    connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus }),
    withRouter
)(ProfileContainer);
