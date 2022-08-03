import { Form, Formik, Field } from "formik";
import { Input, Textarea } from "../../common/FormsControls/FormControls";
import * as Yup from 'yup';
import s from "../../common/FormsControls/FormControls.module.css"

const ProfileDataForm = ({profile, exitFromEditMode, saveProfileData}) => {
    const onSaveProfileData = (values, { setSubmitting, setStatus }) => {
        saveProfileData(values, setStatus)
            .then(() => {exitFromEditMode();})
            .catch((err) => {});
        setSubmitting(false);
    }

    const ProfileDataSchema = Yup.object().shape({
        fullName: Yup.string()
          .min(2, 'Too Short!')
          .max(50, 'Too Long!')
          .required('Required'),
        aboutMe: Yup.string()
          .min(2, 'Too Short!')
          .max(50, 'Too Long!')
    });

    return (
        <div>
            <Formik
                initialValues={{ fullName: profile.fullName || "", aboutMe: profile.aboutMe || "", lookingForAJob: profile.lookingForAJob, lookingForAJobDescription: profile.lookingForAJobDescription || "",
                    contacts: {...profile.contacts}
                }}
                validateOnBlur={false}
                validateOnChange={false}
                validationSchema={ProfileDataSchema}
                onSubmit={onSaveProfileData}
            >
                {({ isSubmitting, status }) => 
                    (<Form>
                        <div>
                            <Field component={Input} typeField="input" name="fullName" type="text" placeholder="FullName" />
                        </div>
                        <div>
                            <Field component={Textarea} name="aboutMe" placeholder="About me"/>
                        </div>
                        <div>
                            <span>Looking for a job: </span> 
                            <Field component={Input} typeField="input" name="lookingForAJob" type="checkbox" />
                        </div>
                        <div>
                            <span>Skills description: </span>
                            <Field component={Textarea} name="lookingForAJobDescription" placeholder="Skills description"/>
                        </div>
                        <div>
                            {
                                Object.keys(profile.contacts).map(key => {
                                    return (
                                        <div key={key}>
                                            <span>{key}: </span>
                                            <Field component={Input} typeField="input" name={`contacts.${key}`} type="text" placeholder={key}  />
                                        </div>
                                    )
                                }) 
                            }
                        </div>
                        {
                            status ? 
                            <div className={s.form_error_message}>
                                {status}
                            </div>
                            : null
                        }
                        <button type="submit" disabled={isSubmitting}>
                            Save
                        </button>
                    </Form>
                )}
            </Formik>
            <button onClick={exitFromEditMode}>back</button>
        </div>
    )
}

export default ProfileDataForm;