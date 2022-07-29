import React from "react";
import s from "./FormControls.module.css";
import { ErrorMessage, getIn } from "formik";

function getStyles(errors, fieldName) {
    if (getIn(errors, fieldName)) {
        return s.error;
    } else {
        return "";
    }
}

export const FormControl = ({ field, form: { errors }, children,...props }) => {
    return (
        <div className={s.form_control + " " + getStyles(errors, field.name)}>
            { children }
            <div className={s.error_message}>
                <ErrorMessage name={field.name} />
            </div>
        </div>);
}

export const Textarea = (props) => {
    const { field, form: { errors } } = props;
    return <FormControl {...props}><textarea {...field} className={getStyles(errors, field.name)} placeholder={props.placeholder ? props.placeholder : ""} /></FormControl>
}

export const Input = (props) => {
    const { field, form: { errors } } = props;
    return <FormControl {...props}><input {...field} className={getStyles(errors, field.name)} placeholder={props.placeholder ? props.placeholder : ""} type={props.type ? props.type : "text"}/></FormControl>
}