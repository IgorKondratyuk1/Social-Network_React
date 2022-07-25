import { connect } from "react-redux";
import Login from "../Login/Login"
import { logout } from "../../redux/authReducer";
import React from "react";

class Logout extends React.Component {
    componentDidMount = () => {
        this.props.logout();
    }
    
    render() {
        return <Login />
    }
}

export default connect(null, { logout })(Logout);