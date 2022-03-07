import React from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import FeatherIcon from "../../general/components/icon/FeatherIcon";



interface Props {
  className?: string;
  fieldStyle: string;
  inputType?: string;
  name: string;
  label: string;
  placeholder: string;
  required?: boolean;
  list?: string[];
  disabled?: boolean;
  outline?: boolean;
  labelBg?: string;
  defaultValue?: string;
  readOnly?: boolean;
  formikObject?: any;
  onClick?: (e: boolean) => void;
  setValue?: (val: string) => void;
}

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

const getFirstLast = (string: string) => {
  return (
    string.substring(0, 1) +
    (string.indexOf(" ") >= 0
      ? string.substring(string.indexOf(" ") + 1, string.indexOf(" ") + 2)
      : "")
  );
};
export {getFirstLast};

const NavDropdownItem = () => {
  const list = ["Post Paddy", "Swift Branding", "Bluch"];

  const [listOpen, setListOpen] = React.useState(false);
  const [value, setValue] = React.useState(list[0]);
  const navigate = useNavigate();

  return (
    <Dropdown>
      <div  onClick={() => {
            setListOpen(!listOpen);
          }} className="header">
        <span className="styled">{getFirstLast(value)}</span>
        <span>{value}</span>
        <FeatherIcon
          className="icon right toggle"
          iconName="chevron-down"
         
        />
      </div>
      <div className={`list${listOpen ? " isOpen" : ""}`}>
        <p>List of workspaces</p>
        {!!list?.length &&
          list.map((item) => (
            <button
              key={item}
              className="listItem"
              onClick={() => {
                setValue(item);
                setListOpen(!listOpen);
              }}
            >
              {item === value ? (
                <FeatherIcon iconName="check" />
              ) : (
                <span></span>
              )}
              <span className="styled">{getFirstLast(item)}</span>
              <span>{item}</span>
            </button>
          ))}
        <button
          onClick={() => navigate("/create-workspace")}
          className="list__btn ft"
        >
          <FeatherIcon iconName="x-circle" className="rotate" />{" "}
          <span>Create a workspace</span>
        </button>
        <button
          onClick={() => navigate("/select-workspace")}
          className="list__btn ctn"
        >
          Log out of Swiftbranding
        </button>
        <button
          onClick={() => navigate("/select-workspace")}
          className="list__btn"
        >
          Exit Swiftbranding
        </button>
      </div>
    </Dropdown>
  );
};

export default NavDropdownItem;

export { Dropdown };
