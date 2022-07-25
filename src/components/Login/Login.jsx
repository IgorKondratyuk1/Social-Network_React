import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { login } from "../../redux/authReducer";
import LoginForm from "./LoginForm";


const Login = (props) => {
    if (props.isAuth) {
        return <Navigate to="/profile" />
    }

    return <LoginForm />
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {})(Login);