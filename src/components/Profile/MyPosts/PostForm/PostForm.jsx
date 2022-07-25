import React from "react";
import s from "./PostForm.module.css";
import { Field, Formik, Form } from "formik";
import { ValidationSchema } from "../../../../utils/validator/validator";
import { Textarea } from "../../../common/FormsControls/FormControls";



const PostForm = (props) => {

    const addPostValidation = ValidationSchema("postText", 1, 200);

    const postFormSubmit = (values, { setSubmitting }) => {
        props.addPost(values.postText);
        values.postText = "";
        setSubmitting(false);
    }

    return (
        <Formik
            initialValues={{ postText: "" }}
            validationSchema={addPostValidation}
            validateOnBlur={false}
            onSubmit={postFormSubmit}
        >
            {({ isSubmitting }) => {
                return (
                <Form className={s.post_form}>
                    <Field name="postText" type="text" component={Textarea} />
                    <div>
                        <button type="submit" disabled={isSubmitting}>
                            Add post
                        </button>
                    </div>
                </Form>
            )}}
        </Formik>
    );
};

export default PostForm;
