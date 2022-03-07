import React from "react";
import styled from "styled-components";
import ItemContainer from "./ItemContainer";
import obinna from "./obinna.svg";
import leslie from "./leslie.svg";
import ralph from "./ralph.svg";
import FeatherIcon from "../../../general/components/icon/FeatherIcon";

interface ModalProps {
  onClick?: Function;
}

const Wrapper = styled.div`
  padding: 0 3.2rem;
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





const MEMBERS_DETAIlS = [
  {
    name: "Obinna Nwachukwu",
    mail: "nwachukwu6755@gmail.com",
    image: obinna,
    task: 20,
    ongoing: 6,
    memberType: "Owner",
  },

];

const MembersContainer = () => {
  const [modalWillShow, setModalWillShow] = React.useState(true);
  return (
    <>
      <Wrapper>
        <ItemContainer buttons={["Own Accounts","Third Party accounts","Borderless Recipient","Mobile Money Recipients"]} members={MEMBERS_DETAIlS} />
      </Wrapper>
      
    </>
  );
};

export default MembersContainer;
