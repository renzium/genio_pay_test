import React from "react";
import styled from "styled-components";
import FormGroup from "../general/components/formGroup/FormGroup";
import { useFormik, FormikHelpers } from "formik";
import * as Yup from "yup";
import { notification, plant } from "../assets";
import ProfileDropdown from "./main/ProfileDropdown";
import FeatherIcon from "../general/components/icon/FeatherIcon";

type formikValues = {
	search: string;
};

const Wrapper = styled.div`
	display: flex;
    height:9.3rem;
    align-items:center;
    padding: 0 3.2rem;

    .current{
        margin-right:auto;
        font-size: 2.8rem;
        line-height:2.8rem;
    }
    form{
        position:relative;
        margin-right:2.4rem;
        width:30.4rem;
        border-radius:1.6rem;
        background-color:var(--background_fm);

        .search{
            position:absolute;
            top:1.983rem;
            left:1.733rem;
            height:1.267rem;
            width:1.267rem;
        }

        &>div{
            padding-left:4.8rem;
        }
    
    }
    .plant{
        display:flex;
        width:9.1rem;
        font-size:1.4rem;
        line-height:2.1rem;
        margin-right:1.6rem;
        img{
            width:2.2rem;
        }
        .text{
            display: block;
            margin: auto;
        }
    }
`;

const TopNav = () => {
	const initialValues: formikValues = {
		search: "",
	};

	const handleSubmit = (
		values: formikValues,
		helpers: FormikHelpers<formikValues>
	) => {};

	const formik = useFormik({
		initialValues,
		onSubmit: (values, helper) => {
			handleSubmit(values, helper);
		},
		// validationSchema,
	});

	return (
		<Wrapper>
			<span className="current">Beneficiaries</span>

			<form onSubmit={formik.handleSubmit}>
                <FeatherIcon className="search" iconName="search"/>
				<FormGroup
					formikObject={formik}
					placeholder="search"
					label="search"
					name="search"
					fieldStyle="shortText"
				/>
			</form>
			<p className="plant">
				<span>
					{" "}
					<img src={plant} alt="plant" />{" "}
				</span>
				<span className="text">{0} planted</span>
			</p>
			<span>
				{" "}
				<img src={notification} alt="notification" />{" "}
			</span>
			<ProfileDropdown
				itemList={["Profile", "Accounts", "Workspace", "Log out"]}
				mail="husssmith@gmail.com"
				name="Huss Smith"
			/>
		</Wrapper>
	);
};

export default TopNav;
