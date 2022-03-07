import React from "react";
import NavItem from "./NavItem";
import styled from "styled-components";
import {
	beneficiaries,
	cards,
	dashboard,
	fxcentre,
	logo,
	perks,
	// plant,
	wallet,
} from "../../assets";

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
					route={item.route}
				/>
			))}
      <NavCar2 />
		</Nav>
	);
};

export default Sidebar;
