import React from "react";
import styled from "styled-components";
import Cards3 from "./Cards3";

interface ItemProps {
	name?: string;
	mail?: string;
	image?: string;
	task?: number;
	ongoing?: number;
	memberType?: string;
	text?: string;
	time?: string;
	initial?: string[];
}

const Wrapper = styled.div`
	margin-top: 4.8rem;
	padding: 2.4rem 4.8rem 2.7rem 2.4rem;

	& > div {
		border-bottom: 0.1rem solid var(--grey_light);
	}
	.cards {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-gap: 1rem;
	}

	.buttons {
		margin-bottom: 2.4rem;
		transition: all 0.3s;
		button {
			width: fit-content;
			border-bottom: 0.1rem solid transparent;
			color: var(--grey_darker);
			font-size: 1.4rem;
			font-weight: bold;
			line-height: 2.4rem;
			text-align: left;
			padding-bottom: 0.6rem;
			font-weight: 400;
		}

		button + button {
			margin-left: 6.4rem;
		}

		.btn_active {
			color: var(--text);
			border-bottom: 0.1rem solid var(--border_nav);
			font-weight: 700;
		}
	}
`;

const DETAILS = [
	{
		id: 1,
		symbol: "&#8364;",
		name: "Cameron Williamson",
		acc: "PL9XXXXXXXXXXXX775",
		cr: "USD",
	},
	{
		id: 2,
		symbol: "&#8364;",
		name: "Cameron Williamson",
		acc: "PL9XXXXXXXXXXXX775",
		cr: "USD",
	},
	{
		id: 3,
		symbol: "&#8364;",
		name: "Cameron Williamson",
		acc: "PL9XXXXXXXXXXXX775",
		cr: "USD",
	},
	{
		id: 4,
		symbol: "&#8364;",
		name: "Cameron Williamson",
		acc: "PL9XXXXXXXXXXXX775",
		cr: "USD",
	},
	{
		id: 5,
		symbol: "&#8364;",
		name: "Cameron Williamson",
		acc: "PL9XXXXXXXXXXXX775",
		cr: "USD",
	},
	{
		id: 6,
		symbol: "&#8364;",
		name: "Cameron Williamson",
		acc: "PL9XXXXXXXXXXXX775",
		cr: "USD",
	},
	{
		id: 7,
		symbol: "&#8364;",
		name: "Cameron Williamson",
		acc: "PL9XXXXXXXXXXXX775",
		cr: "USD",
	},
	{
		id: 8,
		symbol: "&#8364;",
		name: "Cameron Williamson",
		acc: "PL9XXXXXXXXXXXX775",
		cr: "USD",
	},
];

const ItemContainer = ({
	buttons,
}: {
	members?: ItemProps[];
	tasks?: ItemProps[];
	buttons: string[];
}) => {
	const [activeIndex, setActiveIndex] = React.useState(1);
	const [details, setDetails] = React.useState([...DETAILS]);

	const handleDelete = (id:number)=>{
		setDetails(
			[
				...details.filter(item =>item.id !== id)
			]
		)
	}

	const handlePage = (pageName: string, index: number) => {
		setActiveIndex(index);
	};

	return (
		<Wrapper>
			<div className="buttons">
				{buttons.map((btn, index) => (
					<button
						className={activeIndex === index ? "btn_active" : ""}
						onClick={() => handlePage(btn, index)}
					>
						{btn}
						{/*({btn === "Member" ? members?.length :  btn === "Task" ? tasks?.length : 0}) */}
					</button>
				))}
			</div>

			{activeIndex === 0 && (
				<div>
					<h1>Own Accounts</h1>
				</div>
			)}
			{activeIndex === 1 && (
				<div>
					<h1>Third Party Accounts</h1>
					<div className="cards">
						{details.map((item, index) => (
							<Cards3
								symbol={item.symbol}
								key={`${item.name}-${index}`}
								name={item.name}
								acc={item.acc}
								cr={item.cr}
								id={item.id}
								delee={handleDelete}
							/>
						))}
					</div>
				</div>
			)}
			{activeIndex === 2 && (
				<div>
					<h1>Borderless Recipient</h1>
				</div>
			)}
			{activeIndex === 3 && (
				<div>
					<h1>Mobile Recipient</h1>
				</div>
			)}
		</Wrapper>
	);
};

export default ItemContainer;
