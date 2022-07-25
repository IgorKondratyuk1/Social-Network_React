import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfile, getUserStatus, updateUserStatus } from "../../redux/profileReducer";
import { withAuthRedirect} from "../../hoc/withAuthRedirect";
import { withRouter } from "../../hoc/withRouter";
import { compose } from "redux";

class ProfileContainer extends React.Component {
    
    componentDidMount = () => {
        let userId = this.props.router.params.userId;
        if(!userId) { 
            userId = 24877
            //userId = this.props.userId;
        } // ===== Test Data =====
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
    }

    render = () => {
        return <Profile {...this.state} profile={this.props.profile} status={this.props.status} updateUserStatus={this.props.updateUserStatus} />;
    }
}

const mapStateToProps = (state) => ({
    userId: state.auth.id,
    isAuth: state.auth.isAuth,
    profile: state.profilePage.profile,
    status: state.profilePage.status
});

export default compose(
    connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus }),
    withRouter,
    //withAuthRedirect
)(ProfileContainer);
