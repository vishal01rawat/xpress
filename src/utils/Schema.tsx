/** @format */

import * as yup from "yup";

export const forgetPasswordSchema = yup.object().shape({
    password: yup
      .string()
      .required("Password  is required")
      .nullable()
      .min(8, "Password must be 8 characters")
      .max(15, `Password Can't be more 20 characters`)
      .matches(
        /(?=(.*\d){2})(?=(.*[a-z]){2})(?=(.*[A-Z]){2})(?=(.*[!@#$%]){2})/,
        "Enter valid password"
      ),
    confirmPassword: yup
      .string()
      .required("Password  is required")
      .oneOf([yup.ref("password")], "Enter valid confirm Password"),
  });

  export const sendEmailSchema = yup.object().shape({
    email: yup.string().email("Enter valid Email").required("Email is Required"),
  });