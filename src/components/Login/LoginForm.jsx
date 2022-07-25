import React from "react";
import { Formik, Field, Form } from 'formik';
import { connect } from "react-redux";
import { login } from "../../redux/authReducer";
import { Input, FormControl } from "../common/FormsControls/FormControls";
import { validateEmail, validatePassword } from "../../utils/validator/validator";

const LoginForm = (props) => {

    const loginFormSubmit = (values, { setSubmitting }) => {
        //console.log(JSON.stringify(values));
        props.login(values.email, values.password, values.rememberMe, false);
        setSubmitting(false);
    }

    return (
        <Formik
            initialValues={{ email: '', password: '', rememberMe: false }}
            validateOnBlur={false}
            validateOnChange={false}
            onSubmit={loginFormSubmit}
        >
            {({ isSubmitting }) => (
                <Form>
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