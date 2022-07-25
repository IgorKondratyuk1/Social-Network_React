import React from 'react';
import s from './MessageForm.module.css';
import { Formik, Field, Form } from 'formik';
import { ValidationSchema } from '../../../utils/validator/validator';
import { Textarea } from '../../common/FormsControls/FormControls';

const MessageForm = (props) => {

    const messageFormValidation = ValidationSchema("messageText", 1, 2000);

    const messageFormSubmit = (values, { setSubmitting }) => {
        props.sendMessage(values.messageText);
        values.messageText = "";
        setSubmitting(false);
    }

    return (
        <Formik
            initialValues={{ messageText: ""}}
            validationSchema={messageFormValidation}
            validateOnBlur={false}
            onSubmit={messageFormSubmit}
        >
            {({ isSubmitting }) => (
                <Form className={s.send_message} >
                    <Field name="messageText" component={Textarea} placeholder="Enter your message"/>
                    <button type="submit" disabled={isSubmitting}>
                        Send
                    </button>
                </Form>
            )}
        </Formik>
    );
}

export default MessageForm;