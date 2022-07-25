import * as Yup from 'yup';

export const ValidationSchema = (fieldName, minValue, maxValue) => {
    return Yup.object().shape({
        [fieldName]: Yup.string()
          .min(minValue, 'Too Short!')
          .max(maxValue, 'Too Long!')
          .required("required")
    });
}

export const LoginValidationSchema = (minValue, maxValue) => {
    return Yup.object().shape({
        email: Yup.string()
          .min(minValue, 'Too Short!')
          .max(maxValue, 'Too Long!')
          .required("required"),
        password: Yup.string()
          .min(minValue, 'Too Short!')
          .max(maxValue, 'Too Long!')
          .required("required")
    });
}

export const required = (value) => {
  if (!value) {
    return 'Required';
  } else if (value.length < 5) {
    return 'Length too low';
  }
  return undefined;
}

export const validateEmail = (value) => {
  if (!value) {
    return 'Required';
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
  ) {
    return 'Invalid email address';
  }
  return undefined;
}

export const validatePassword = (value) => {
  if (!value) {
    return 'Required';
  }
  return undefined;
} 