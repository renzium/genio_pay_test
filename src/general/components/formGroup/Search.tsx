import styled from "styled-components";

interface Props {
  errorMsg: string;
  fieldStyle: string;
  disabled: boolean;
  labelBg: string;
  [x: string]: unknown; // for the rest of the HTML tag props and others
}

const Search = styled.div<Props>`
  width: 100%;
  position: relative;
  transition: all 0.2s ease-out;

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

  .errorText {
    display: none;
  }

  &.error {
    border-color: var(--danger);

    label {
      color: var(--danger);
    }

    .errorText {
      display: block;
      content: "${(props) => props.errorMsg}";
      position: absolute;
      top: calc(100% + 0.6rem);
      left: 0.8rem;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px;
      letter-spacing: 0px;
    }
  }

  input {
    display: block;
    color: var(--text);
    width: -webkit-fill-available;
    background-color: transparent;
    border: none;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0px;
    pointer-events: ${(props) =>
      props.fieldStyle === "dropdown" ? "none" : "all"};

    &::placeholder {
      color: ${(props) => (props.disabled ? "var(--border)" : "var(--grey_1)")};
    }
  }

  .header {
    width: 100%;
    height: 4.8rem;
    border: 1px solid var(--border);
    border-radius: 0.4rem;
    padding: 0 1.6rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--grey_1);
    background-color: var(--white);
  }

  .list {
    width: 100%;
    max-height: 30vh;
    overflow: auto;
    position: absolute;
    top: 3rem;
    left: 0;
    background-color: var(--white);
    border-radius: 1rem;
    box-shadow: 0px 25px 35px 0px #00000008;
    opacity: 0;
    pointer-events: none;
    transition: all 0.2s ease-out;
    z-index: 10;
  }

  .listItem {
    width: 100%;
    height: 4.8rem;
    padding: 0 1.6rem;
    display: flex;
    align-items: center;
    color: var(--grey_1);
    transition: all 0.2s ease-out;

    &:hover {
      background-color: var(--grey_4);
    }
  }

  &.isOpen {
    .list {
      top: 6rem;
      opacity: 1;
      pointer-events: all;
    }
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

  label {
    position: absolute;
    top: -0.8rem;
    left: 0.8rem;
    display: block;
    padding: 0 0.4rem;
    color: ${(props) =>
      props.errorMsg ? "var(--danger)" : "var(--primary_main)"};
    font-size: 12px;
    line-height: 16px;
    background-color: ${(props) => props.labelBg ?? "var(--white)"};
  }

  @media screen and (min-width: 768px) {
    .list {
      max-height: 20vh;
    }
  }
`;

export default Search;
