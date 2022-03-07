import React from "react";
import styled from "styled-components";
import { loudspeaker } from "../../assets";
import Button from "../../general/components/button/Button";

const Wrapper = styled.div`
    padding: 2rem;
	background-color: var(--white);
    border-radius: 0.8rem;
    width: 77.84%;
    margin: 10.8rem auto 10.8rem;
    

	button {
		margin: auto;
        margin-top:1.6rem;
	}

.tm{
    display:flex;

    .img{
        margin-right:1.6rem;
    }

    p{
        display:flex;
        flex-direction:column;
        &>:first-child{
            font-size:1.6rem;
            line-height:2.4rem;
            color:var(--title);
        }
        &>:nth-child(2){
            font-size:1.4rem;
            line-height:2.1rem;
        }
    }
}


`;

const NavCar2 = () => {
	return (
		<Wrapper>
			<div className="tm">
				<span className="img">
					<img src={loudspeaker} alt="loudspeaker" />
				</span>
				<p>
					<span>Refer and earn</span>
					<span>Use the below link to invite friends</span>
				</p>
			</div>
			<Button height="5.6rem" width="20.1rem" text="Invite Friends" />
		</Wrapper>
	);
};

export default NavCar2;
