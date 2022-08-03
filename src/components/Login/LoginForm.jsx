import React from "react";
import { Formik, Field, Form } from 'formik';
import { Input } from "../common/FormsControls/FormControls";
import { validateEmail, validatePassword, required } from "../../utils/validator/validator";
import s from "./LoginForm.module.css";

const LoginForm = ({isAuth, login, captchaUrl}) => {

    const loginFormSubmit = (values, { setSubmitting, setStatus }) => {
        login(values.email, values.password, values.rememberMe, values.captcha, setStatus);
        setSubmitting(false);
    }

    return (
        <Formik
            initialValues={{ email: '', password: '', captcha: '', rememberMe: false }}
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
                    {
                        captchaUrl && 
                        <div>
                            <img src={captchaUrl} alt="captcha" />
                            Captcha
                            <Field component={Input} typeField="input" name="captcha" type="text" placeholder="captcha" validate={required} />
                        </div>
                    }
                    <button type="submit" disabled={isSubmitting}>
                        Login
                    </button>
                </Form>
            )}
        </Formik>
    )
}

export default LoginForm;