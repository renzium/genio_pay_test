import React from "react";
import styled from "styled-components";
import ItemContainer from "./ItemContainer";

interface ModalProps {
  onClick?: Function;
}

const Wrapper = styled.div`
  padding: 0 1.2rem;
  & > h3 {
    font-size: 2.4rem;
    line-height: 3.2rem;
  }
  & > p {
    margin-top: 1.2rem;
    font-size: 1.6rem;
    line-height: 2.4rem;
  }
`;







const MembersContainer = () => {
  return (
    <>
      <Wrapper>
        <ItemContainer buttons={["Own Accounts","Third Party accounts","Borderless Recipient","Mobile Money Recipients"]} />
      </Wrapper>
      
    </>
  );
};

export default MembersContainer;
