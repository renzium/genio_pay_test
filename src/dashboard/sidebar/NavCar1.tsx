import React from "react";
import styled from "styled-components";
import { balance, eye, star } from "../../assets";
import Button from "../../general/components/button/Button";
const Wrapper = styled.div`
	width: 24.6rem;
	background-color: var(--primary_light);
	padding: 1.6rem 2rem;
	margin: auto;
    margin-bottom: 5.6rem;
	border-radius: 0.8rem;
	position: relative;

    .item{
        display: grid;
        grid-template-columns: 3.2rem 1fr;
        align-items:center;
        border-bottom: 0.1rem solid var(--white);
        padding-bottom: 0.8rem;
        margin-bottom: 0.8rem;
        &> span:not(:first-child){
            margin-left:0.8rem;
            color:var(--white);
        }
        .val1{
            font-size:1.4rem;
            line-height:2.1rem;
        }
        .val2{
            font-size:1.6rem;
            line-height:2.4rem;  
            font-weight:700;
        }
        .icon_ctn{
            grid-column: 1 / 2;
            grid-row: 1/3;
            height: 3.2rem;
            display:flex;
            align-items:center;
            justify-content:center;
            background-color:var(--white);
            border-radius:0.8rem;
            img{
                height:1.6rem;
                width:1.6rem;
            }
        }
    }

    .buttons{
        display:flex;
        button + button{
            margin-left:0.7rem;
        }
        margin-top:1.6rem;
    }

	.eye {
		position: absolute;
		top: 3.5rem;
		right: 3.3rem;
	}
`;

const INPUTS = [
	{
		icon: balance,
		val1: "Wallet Balance",
		val2: "$15,001.00",
	},
	{
		icon: star,
		val1: "Awarded Points",
		val2: "35",
	},
];

const NavCar1 = () => {
	return (
		<Wrapper>
			<img className="eye" src={eye} alt="eye" />
			{INPUTS.map((item) => (
				<div  className="item" key={item.val1}>
					<span className="icon_ctn">
						<img src={item.icon} alt="icon" />
					</span>
					<span className="val1">{item.val1}</span>
					<span className="val2">{item.val2}</span>
				</div>
			))}


            <div className="buttons">
                <Button bg='var(--rose)' width="9.95rem" text="Pay-In"/>
                <Button tc="var(--primary_light)" bg="var(--white)" width="9.95rem" text="Pay-Out"/>
            </div>
		</Wrapper>
	);
};

export default NavCar1;
