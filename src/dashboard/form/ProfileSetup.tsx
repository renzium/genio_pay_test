import React from "react";
import Button from "../../general/components/button/Button";
import FormGroup from "../../general/components/formGroup/FormGroup";
import styled from "styled-components";
import FormWrapper from "./FormWrapper";
import { useFormik, FormikHelpers, FormikValues, FormikConfig } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import FeatherIcon from "../../general/components/icon/FeatherIcon";

interface Values {
  handleSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
  isSubmitting: boolean;
  isValid: boolean;
  values: any;
}

type formikValues = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: number | null;
  companyName: string;
  jobTitle: string;
  jobDescription: string;
};

const Wrapper = styled.div`
  h3 {
    margin-top: 16.8rem;
  }
  .profile {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 4.8rem auto 0;
    color: white;
    font-size: 4.8rem;
    line-height: 4.8rem;
    height: 9.6rem;
    width: 9.6rem;
    border-radius: 50%;
    background-color: #ffa800;
  }
  .upload {
    width: 12.3rem;
    display: flex;
    margin: 1.6rem auto 5.2rem;
    justify-content: space-between;
    align-items: center;
    font-size: 1.2rem;
    color: var(--grey_dark);
    line-height: 1.6rem;
    svg {
      color: var(--grey_dark);
    }
  }
  input,
  textarea {
    color: #8d9091;
  }

  form{
    margin-top:0 !important;
  }

  .withImport{
    display:flex;
    justify-content:center;
    margin: auto;
    
    &>div + button{
      margin-left:19.1rem;
    }
    & >  button{
      align-self:center;
    }
  }
`;

const ProfileSetup = ({ importProfile }: { importProfile?: boolean }) => {
  const navigate = useNavigate();


  const initialValues: formikValues = {
    firstName: localStorage.getItem("firstName") || "",
    lastName: localStorage.getItem("lastName") || "",
    email: localStorage.getItem("email") || "",
    phoneNumber: null,
    companyName: "",
    jobTitle: "",
    jobDescription: "",
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    lastName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    phoneNumber: Yup.number()
      .min(10 ** 7, "Too Short!")
      .max(10 ** 13, "Too Long!")
      .required("Required"),
    companyName: Yup.string().required("Required"),
    jobTitle: Yup.string().required("Required"),
    jobDescription: Yup.string().required("Required"),
  });

  const handleSubmit = (
    values: formikValues,
    helpers: FormikHelpers<formikValues>
  ) => {
    const { setFieldError, setSubmitting } = helpers;
    Object.keys(values).forEach((key, index) => {
      // localStorage.setItem(key, Object.values(values)[index]?.toString());
    });

    navigate("/signup-complete");
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
    return Object.values(formik.errors).length;
  };

  const hasNotAllBeenTouched = () => {
    if (!Object.values(formik.touched).length) return true;
    return Object.values(formik.touched).some((touchedState) => !touchedState);
  };

 const  handleClick = ()=>{
   document.getElementById("upload")?.click()
 }
  return (
    <Wrapper>
      <h3 className="textCenter display">
        Just a few quick things to set up <br /> your account…
      </h3>
      {!importProfile ? (
        <>
          <div className="withImport">
            <div>
              <span className="textCenter  profile">
                {localStorage.getItem("firstName")?.substring(0, 1)}
                {localStorage.getItem("lastName")?.substring(0, 1)}
              </span>
              <p className="upload" onClick={handleClick}>
                <FeatherIcon
                  className="toggleShow cursorPointer "
                  iconName="upload-cloud"
                />
                <span>Upload a photo</span>
              </p>
            </div>
            <Button text="or Import Profile" />
          </div>
        </>
      ) : (
        <>
          <span className="textCenter  profile">
            {localStorage.getItem("firstName")?.substring(0, 1)}
            {localStorage.getItem("lastName")?.substring(0, 1)}
          </span>
          <p className="upload"  onClick={handleClick}>
            <FeatherIcon
              className="toggleShow cursorPointer "
              iconName="upload-cloud"
            />
            <span>Upload a photo</span>
          </p>
        </>
      )}
      <FormWrapper onSubmit={formik.handleSubmit}>
      <input
        type="file"
       id="upload"
       style={{display:"none"}}
      />        <FormGroup
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
          label="Phone number"
          placeholder="Phone number"
          name="phoneNumber"
          formikObject={formik}
          inputType="number"
        />
        <FormGroup
          fieldStyle="shortText"
          label="Company name"
          placeholder="Company name"
          name="companyName"
          formikObject={formik}
        />

        <FormGroup
          fieldStyle="shortText"
          label="Job title"
          placeholder="Job title (e.g Product Manager)"
          name="jobTitle"
          formikObject={formik}
        />

        <FormGroup
          fieldStyle="multiline"
          label="Job description"
          placeholder="Job description"
          name="jobDescription"
          formikObject={formik}
        />

        <Button
          disabled={hasNotAllBeenTouched() || hasErrors()}
          fullWidth
          text="Continue"
          className="marginTop_large"
          type="submit"
        />
      </FormWrapper>
    </Wrapper>
  );
};

export default ProfileSetup;
