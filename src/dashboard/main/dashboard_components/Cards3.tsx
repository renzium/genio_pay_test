import React from "react";
import styled from "styled-components";
import FeatherIcon from "../../../general/components/icon/FeatherIcon";

const Wrapper = styled.div`
	width: 32.6rem;
	padding: 2.4rem;
    background-color: white;
    border-radius: 0.8rem;
    border: 0.1rem solid var(--border_card);

	.first {
		display: flex;
		align-items: center;
		& > :first-child,
		& > :nth-child(2) {
			font-size: 1.6rem;
			line-height: 2.4rem;
		}
		& > :nth-child(2) {
			margin-right: auto;
			margin-left: 0.8rem;
		}

		& > :first-child {
			padding: 0.6rem 1.2rem;
			background-color: var(--slate);
			font-weight: 700;
			border-radius: 50%;
		}
	}

	.second {
		margin-top: 3rem;
		font-size: 2.1rem;
		line-height: 3.15rem;
		font-weight: 700;
	}

	.third {
		display: flex;
		font-size: 1.6rem;
		line-height: 2.4rem;
        padding-bottom:1.6rem;
        border-bottom :0.1rem solid #E3EAEC;
        margin-bottom:1.8rem;

		& > :first-child {
			font-weight: 700;
		}
		& > :last-child {
			margin-left: 2.4rem;
		}
	}

	div {
		button {
			font-size: 1.4rem;
			line-height: 2.1rem;
			color: var(--text);
            margin-right:0.6rem;

			.icon {
                width:1.184rem;
                height:1.184rem;
                margin-right: 0.4rem;
				svg {
					color: #55676B;
				}
			}

                &:last-child{
                    color:red;
                    svg{
                        color: red;
                    }
                }
		}
	}
`;

const Cards3 = ({symbol,name,acc,cr,id,delee }:{symbol:string,name:string,cr:string,acc:string,id:number,delee: any}) => {
	const handleDelete = ()=>delee(id);
	return (
		<Wrapper>
			<p className="first">
				<p dangerouslySetInnerHTML={{__html:`<span>${symbol}</span>`}}></p>
				<span>{name}</span>
				<button className="more">
					<FeatherIcon iconName="more-vertical" />
				</button>
			</p>
			<p className="second">{acc}</p>
			<p className="third">
				<span>{name}</span>
				<span>{cr}</span>
			</p>
			<div>
				<button>
					<FeatherIcon className="icon" iconName="send" />
					<span>Pay</span>
				</button>
				<button>
					<FeatherIcon className="icon" iconName="users" />
					<span>Set as default</span>
				</button>
				<button onClick={handleDelete}>
					<FeatherIcon className="icon" iconName="trash-2" />
					<span>Remove</span>
				</button>
			</div>
		</Wrapper>
	);
};

export default Cards3;
