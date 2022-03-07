import React from "react";
import FeatherIcon from "../../general/components/icon/FeatherIcon";
import { Dropdown, getFirstLast } from "../sidebar/NavDropdownItem";
import styled from "styled-components";
import { huss } from "../../assets";

const Wrapper = styled(Dropdown)`
	width: 17.8rem;
	margin: 0;
  
	.styled {
    border-radius: 50%;
    width:1.5rem;
    height:1.5rem;
	}
  
	.header {
    height:5.6rem;
    padding: 0 1.6rem 0 1.6rem;
		svg {
			color: var(--text);
		}
	}

	.list {
		margin-left: 0;
		transform: translateX(-60%);
		padding: 2.4rem;
		width: 27rem;

		& > :first-child {
			margin-bottom: unset;
			line-height: unset;
			font-size: unset;
		}

		.avatar {
			display: grid;
			height: 6rem;
			margin-bottom: 3.8rem;
			grid-template-columns: 4.8rem 1fr;

			& > :first-child {
				height: 100%;
				width: 100%;
				grid-column: 1 / 2;
				grid-row: 1 / 3;
			}
			& > :nth-child(2) {
				grid-column: 2 / 3;
				grid-row: 1/2;
				margin-left: 1.2rem;
				font-size: 1.6rem;
				line-height: 2.4rem;
				color: var(--text);
			}
			& > :nth-child(3) {
				grid-column: 2 / 3;
				grid-row: 2/ 3;
				margin-left: 1.2rem;
				font-size: 1.4rem;
				line-height: 2rem;
			}
		}
		.listItem {
			padding-left: 0.4rem;
			font-size: 1.4rem;
			line-height: 2rem;
			color: var(--text_lighter);
			height: fit-content;
		}

		.listItem + .listItem {
			margin-top: 1.6rem;
		}
		.listItem:last-child {
			margin-top: 4rem;
		}
	}


  .status{
    display: flex;
    flex-direction:column;
    &>span:first-child{
      font-size:1.2rem;
      line-height:1.637rem;
      color:var(--success);
      text-transform: capitalize;
    }

    &>span:nth-child(2){
      color:var(--text_main);
      font-size:1.6rem;
      line-height:2.4rem;
    }
  }
`;

const ProfileDropdown = ({
	name,
	itemList,
	mail,
}: {
	name: string;
	mail: string;
	itemList: string[];
}) => {
	const [listOpen, setListOpen] = React.useState(false);

	return (
		<Wrapper>
			<div
				onClick={() => {
					setListOpen(!listOpen);
				}}
				className="header"
			>
				<img src={huss} alt="huss" className="styled" />
				<p className="status">
					<span>Verified</span>
					<span>Huss Smith</span>
				</p>
				<FeatherIcon
					className=" right toggle"
					iconName="chevron-down"
					onClick={() => {
						setListOpen(!listOpen);
					}}
				/>
			</div>
			<div className={`list${listOpen ? " isOpen" : ""}`}>
				<div className="avatar">
					<img src={huss} alt="huss" />
					<p>{name}</p>
					<p>{mail}</p>
				</div>
				{!!itemList?.length &&
					itemList.map((item) => (
						<button
							key={item}
							className="listItem"
							onClick={() => {
								// setValue(item);
								setListOpen(!listOpen);
							}}
						>
							{item}
						</button>
					))}
			</div>
		</Wrapper>
	);
};

export default ProfileDropdown;
