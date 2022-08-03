import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfile, getUserStatus, updateUserStatus, savePhoto, saveProfileData } from "../../redux/profileReducer";
import { withRouter } from "../../hoc/withRouter";
import { compose } from "redux";

class ProfileContainer extends React.Component {

    refreshUserProfile = () => {
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
    
    componentDidMount = () => {
        this.refreshUserProfile();
    }

    componentDidUpdate(prevProps, prevState) { 
        if(prevProps.router.params.userId !== this.props.router.params.userId) {
            this.refreshUserProfile();
        }
    }

    render = () => {
        return <Profile {...this.state} 
                        profile={this.props.profile} 
                        status={this.props.status} 
                        updateUserStatus={this.props.updateUserStatus} 
                        savePhoto={this.props.savePhoto} 
                        saveProfileData={this.props.saveProfileData}
                        isOwner={!this.props.router.params.userId} />;
    }
}

const mapStateToProps = (state) => ({
    authorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth,
    profile: state.profilePage.profile,
    status: state.profilePage.status
});

export default compose(
    connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus, savePhoto, saveProfileData }),
    withRouter
)(ProfileContainer);
