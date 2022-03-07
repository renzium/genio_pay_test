import React from "react";
import Button from "../../general/components/button/Button";
import FormGroup from "../../general/components/formGroup/FormGroup";
import logo from "../logo.svg";
import google from "./google.svg";
import { useFormik, FormikHelpers } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";



type formikValues = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  // withGoogle?: boolean;
};
type Props  = {
  withGoogle?:boolean;
}
export default function Layout({withGoogle}:Props) {
  
  const navigate = useNavigate()

  const initialValues: formikValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    lastName: Yup.string()
    .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required("Required"),
    confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'),null] ,"Password must match").required("Required"),
  });

  const handleSubmit = (
    values: formikValues,
    helpers: FormikHelpers<formikValues>
  ) => {
  Object.keys(values)
  .forEach((key,index) =>{
    localStorage.setItem(key,Object.values(values)[index])
  })
    navigate("/verify-email");
    // handle submit
  };

  const formik = useFormik({
    initialValues,
    onSubmit: (values, helper) => {
      handleSubmit(values, helper);
    },
    validationSchema,
  });



  const hasErrors = () => {
    return Object.values(formik.errors).length
  }

  const hasNotAllBeenTouched = () => {
    if (!Object.values(formik.touched).length) return true;
    return Object.values(formik.touched).some(touchedState => !touchedState)
  }
 


  return (
    <form onSubmit={formik.handleSubmit}>

      <FormGroup
        fieldStyle="shortText"
        label="First name"
        placeholder="First name"
        formikObject={formik}
        name="firstName"
      />
      <FormGroup
        fieldStyle="shortText"
        label="Last name"
        placeholder="Last name"
        name="lastName"
        formikObject={formik}
      />
      <FormGroup
        fieldStyle="shortText"
        label="Email address"
        placeholder="Tobiadeoti99@gmail.com"
        name="email"
        formikObject={formik}
      />
      <FormGroup
        fieldStyle="shortText"
        inputType="password"
        label="Password"
        placeholder="Password"
        name="password"
        formikObject={formik}
      />
      <FormGroup
        fieldStyle="shortText"
        inputType="password"
        label="Confirm password"
        placeholder="Confirm password"
        name="confirmPassword"
        formikObject={formik}
      />
      <Button
        disabled={ hasNotAllBeenTouched() || hasErrors()}
        fullWidth
        text="Sign up"
        className="marginTop_large"
        type="submit"

      />
    </form>
  );
}
