import React from "react";
import FeatherIcon from "../../general/components/icon/FeatherIcon";
import styled from "styled-components";
import { huss } from "../../assets";


const Dropdown = styled.div`
  width: 100%;
  position: relative;
  transition: all 0.2s ease-out;
  margin: 5.4rem 0 6.8rem;

  &:hover {
    border-color: var(--grey_3);

    .header {
      border-color: var(--grey_3);
    }
  }

  &.contentFilled {
    .header {
      border-color: var(--primary);
    }
  }

  .styled {
    display: block;
    height: 3.6rem;
    width: 3.6rem;
    border-radius: 0.8rem;
    background-color: #01a3fa;
    color: var(--white);
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .header {
    width: 100%;
    height: 4.8rem;
    border-radius: 0.4rem;
    padding: 0 2.7rem 0 2.7rem;
    display: flex;
    align-items: center;
    color: var(--white);
    background-color: transparent;
    text-transform: uppercase;

    & > :nth-child(2) {
      margin-right: auto;
      margin-left: 1.2rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .icon {
      width: 100%;
      color: var(--white);
      height: 1.5rem;
    }
  }

  .list {
    border-radius: 0.3rem;
    width: 100%;
    color: var(--text_lighter);
    overflow: auto;
    position: absolute;
    margin-left: 2.42rem;
    padding: 1.16rem;
    top: 3rem;
    left: 0;
    background-color: var(--white);
    /* border-radius: .3rem; */
    box-shadow: 0px 25px 35px 0px #00000008;
    opacity: 0;
    pointer-events: none;
    transition: all 0.2s ease-out;

    z-index: 10;

    & > :first-child {
      color: var(--grey_main);
      font-size: 1rem;
      line-height: 1.4rem;
      margin-bottom: 1.8rem;
    }

    &.isOpen {
      top: 5rem;
      opacity: 1;
      pointer-events: all;
    }
  }

  .listItem {
    width: 100%;
    height: 4.8rem;
    display: flex;
    align-items: center;
    color: var(--grey_1);
    transition: all 0.2s ease-out;

    & > .styled {
      height: 2.4rem;
      width: 2.4rem;
      font-size: 1rem;
    }

    & > :first-child {
      width: 1.6rem;
    }
    & > :nth-child(2) {
      margin: 0 1.2rem 0 1.6rem;
      width: 2.4rem;
    }

    & > :last-child {
      color: var(--text_main);
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      flex: 1;
      text-align: left;
    }

    &:hover {
      background-color: var(--grey_4);
    }
  }

  .rotate {
    transform: rotate(45deg);
  }

  .icon {
    &.cancel {
      cursor: pointer;
    }

    &.left {
      margin-right: 0.8rem;
    }

    &.right {
      margin-left: 0.8rem;
    }
  }

  @media screen and (min-width: 768px) {
    .list {
      /* max-height: 20vh; */
    }
  }

  .title {
    width: -webkit-fill-available;
  }

  .header,
  input {
    cursor: pointer;
  }

  &.isOpen {
    .icon {
      transition: all 0.2s ease-out;
      &.right {
        transform: rotateZ(180deg);
      }
    }
  }

  .list__btn {
    display: block;
    color: var(--text_lighter);
    font-size: 1.2rem;

    &.ft {
      font-size: 1.6rem;
      display: flex;
      align-items: center;
      margin-top: 3.8rem;
      & > :last-child {
        margin-left: 1.4rem;
      }
    }

    &.ctn {
      margin: 4.2rem 0 4.4rem;
    }
  }
`;

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
