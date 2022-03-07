import styled from "styled-components";

interface Props {
  outline?: boolean;
  errorMsg?: string;
  disabled?: boolean;
  labelBg?: string;
  [x: string]: unknown; // for the rest of the HTML tag props and otherss
}

const TextField = styled.div<Props>`
  display: flex;
  justify-content: center;
  background-color: transparent;
  border-radius: 1.6rem;
  padding: 0 1.6rem;
  height: 4.8rem;
  border: 1px solid var(--border_fm);
  position: relative;
  transition: all 0.2s ease-out;

  &:hover {
    border-color: var(--grey_3);
  }

  &.contentFilled {
    border-color: var(--primary_main);
  }
  .errorText {
    display: none;
  }
  
  &.error {
    border-color: var(--danger);
    
    color:var(--danger);
    label {
      color: var(--danger);
    }
    
    .errorText {
      display: block;
      content: "${(props) => props.errorMsg}";
      position: absolute;
      top: calc(100% + 0.05rem);
      left: 0.8rem;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px;
      letter-spacing: 0px;
    }
  }

  input,
  textarea,
  select {
    display: block;
    color: var(--text);
    width: 100%;
    background-color: transparent;
    border: none;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0px;
    
    &::placeholder {
      color: ${(props) =>
        props.disabled ? "var(--text_lighter)" : "var(--grey_darker)"};
    }
  }
  
 
  
  &.password {
    input,
    textarea {
      width: 80%;
      margin-right:auto;
    }
    
    .toggleShow {
      display: inline;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 1.5rem;
      height: 2rem;
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

 
 
`;

export default TextField;
