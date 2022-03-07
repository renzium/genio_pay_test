import React from "react";
import NavDropdownItem from "./NavDropdownItem";
import NavItem from "./NavItem";
import styled from "styled-components";
import {
	beneficiaries,
	cards,
	dashboard,
	fxcentre,
	logo,
	perks,
	plant,
	wallet,
} from "../../assets";

import Button from "../../general/components/button/Button";
import { useNavigate } from "react-router";
import NavCar1 from "./NavCar1";
import NavCar2 from "./NavCar2";

const Nav = styled.nav`
	background-color: var(--primary);
	height: 100vh;
  overflow-y:auto;
  &::-webkit-scrollbar{
       display:none;
   }

	width: 31.6rem;
	& > :first-child {
    display:block;
    width:18.8rem;
		margin: 2.4rem auto 3.2rem;
	}

	.wrapper {
		position: relative;
		& > :nth-child(2) {
			display: none;
		}
		&:hover > :nth-child(2) {
			display: block;
		}
	}
`;

const PopupStyle = styled.div`
	position: absolute;
	z-index: 100;
	top: 3rem;

	& > :first-child {
		background-color: var(--white);
		height: 1.7rem;
		width: 1.7rem;
		clip-path: polygon(0 100%, 50% 0, 100% 100%);
		margin-left: 1.5rem;
		border: none;
	}

	& > :nth-child(2) {
		border-radius: 0.8rem;
		padding: 1.2rem 1rem;
		width: 18.1rem;
		height: 14rem;
		background-color: var(--white);
		margin-top: -0.1rem;

		& > p:first-child {
			font-size: 1.2rem;
		}
		& > p:nth-child(2) {
			font-size: 1rem;
			line-height: 1.4rem;
			margin: 1.2rem 0 2.4rem;
			color: var(--text_light);
		}

		button {
			font-size: 0.8rem;
			padding: 0;
			width: 5.4rem;
			height: 2.4rem;
			border-radius: 0.2rem;
			margin-left: auto;
		}
	}
`;

const Sidebar = () => {
	const navigate = useNavigate();
	const NAV_LIST = [
		{ name: "Dashboard", iconName: dashboard, route: "dashboard" },
		{ name: "Wallet", iconName: wallet, route: "wallet" },
		{ name: "Cards", iconName: cards, route: "cards" },
		{ name: "FX Centre", iconName: fxcentre, route: "fxcentre" },
		{ name: "Beneficiaries", iconName: beneficiaries, route: "beneficiaries" },
		{ name: "Perks", iconName: perks, route: "perks" },
	];
	return (
		<Nav>
			{/* <Logo wt /> */}
			<img src={logo} alt="logo" />
			{/* <NavDropdownItem /> */}

			<NavCar1 />

			{NAV_LIST.map((item) => (
				<NavItem
					name={item.name}
					onClick={() => navigate(item.route)}
					iconName={item.iconName}
					key={item.name}
				/>
			))}
      <NavCar2 />
		</Nav>
	);
};

export default Sidebar;
