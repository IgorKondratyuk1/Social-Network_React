import React from "react";
import { Formik, Field, Form } from 'formik';
import { connect } from "react-redux";
import { login } from "../../redux/authReducer";
import { Input } from "../common/FormsControls/FormControls";
import { validateEmail, validatePassword } from "../../utils/validator/validator";
import s from "./LoginForm.module.css";

const LoginForm = ({login}) => {

    const loginFormSubmit = (values, { setSubmitting, setStatus }) => {
        login(values.email, values.password, values.rememberMe, setStatus);
        setSubmitting(false);
    }

    return (
        <Formik
            initialValues={{ email: '', password: '', rememberMe: false }}
            validateOnBlur={false}
            validateOnChange={false}
            onSubmit={loginFormSubmit}
        >
            {({ isSubmitting, status }) => 
                (<Form>
                    <div>
                        Login
                        <Field component={Input} typeField="input" name="email" type="email" placeholder="email" validate={validateEmail} />
                    </div>
                    <div>
                        Password
                        <Field component={Input} typeField="input" name="password" type="password" placeholder="password" validate={validatePassword} />
                    </div>
                    <div>
                        Remember me
                        <Field component={Input} type="checkbox" name="rememberMe"/>
                    </div>
                    {
                        status ? 
                        <div className={s.form_error_message}>
                            {status}
                        </div>
                        : null
                    }
                    <button type="submit" disabled={isSubmitting}>
                        Login
                    </button>
                </Form>
            )}
        </Formik>
    )
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, { login })(LoginForm);