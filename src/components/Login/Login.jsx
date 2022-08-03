import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import LoginForm from "./LoginForm";
import { login } from "../../redux/authReducer";


const Login = (props) => {
    if (props.isAuth) {
        return <Navigate to="/profile" />
    }

    return <LoginForm isAuth={props.isAuth} captchaUrl={props.captchaUrl} login={props.login} />
}

const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, { login })(Login);