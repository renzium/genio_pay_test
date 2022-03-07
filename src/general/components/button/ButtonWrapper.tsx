import styled from "styled-components";

interface Props {
  height?: number;
  width?: number;
  fullWidth?: boolean;
  bg?: string;
  tc?: string;
}

const ButtonWrapper = styled.button<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
      height: ${(props) =>
    !props.height ? "4rem" : props.height ?? "fit-content"};
  width: ${(props) =>
    props.fullWidth ? "100%" : props.width ?? "fit-content"};
  /* padding: 0 3.6rem; */
  background-color: ${(props) =>
    props.disabled ? "#d9d9d9" : props.bg ?? "var(--primary)"};
  color:${(props) =>
      props.tc ??  "var(--white)"};
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.182rem;
  letter-spacing: 0px;
  text-align: center;
  transition: background 250ms ease-in;

  .icon {
    height: 2rem;
    margin-right: 1.2rem;
  }
  .endIcon {
    height: 2rem;
    margin-left: 1.2rem;
    cursor: pointer;
  }

  &:hover {
    background-color: ${(props) =>
      props.disabled ? "#d9d9d9" : props.bg ?? "var(--primary_dark)"};
    color: ${(props) =>
      props.tc ??  "var(--white)"};
  }

  &:focus {
    background-color: ${(props) =>
      props.disabled ? "#d9d9d9" : props.bg ?? "var(--primary_darker)"};
    color:${(props) =>
      props.tc ??  "var(--white)"};
  }

  &.bordered {
    border: 1px solid
      ${(props) => (props.disabled ? "#d9d9d9" : "var(--border)")};
    /* color: var(--primary); */
    background-color: transparent;

    &:hover {
      border: 1px solid
        ${(props) => (props.disabled ? "#d9d9d9" : "var(--primary_dark)")};
      color: var(--primary);
      background-color: transparent;
    }

    &:focus {
      border: 1px solid
        ${(props) => (props.disabled ? "#d9d9d9" : "var(--primary_darker)")};
      color: var(--primary);
      background-color: transparent;
    }
  }

  &.noBorder {
    border: none;
    color: var(--primary_main);
    background-color: transparent;
  }

  @media screen and (max-width: 768px) {
    font-size: 14px;
    line-height: 18px;
    padding: 1.2rem;
    height: 3.6rem;
  }
`;

export default ButtonWrapper;
