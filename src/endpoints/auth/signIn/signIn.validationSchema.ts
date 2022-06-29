import * as yup from 'yup';

const requestBody = {
  body: {
    email: yup
      .string()
      .required('Email is required')
      .email('Email is invalid'),
    password: yup
      .string()
      .required('Password is required')
      .min(4, 'Password must have at least 4 charachers')
      .max(16, 'Password can not be longer than 16 characters'),
  },
};

export default requestBody;
