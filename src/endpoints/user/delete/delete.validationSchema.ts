import * as yup from 'yup';

const requestBody = {
  body: {
    userId: yup.number(),
  },
};

export default {
  ...requestBody,
};
