import styled from "styled-components";

const AlertWrapper = styled.div`
  position: absolute;
  height: 4.8rem;
  min-width: 37rem;
  padding: 0 2.4rem;
  background-color: #ffffff;
  box-shadow: var(--shadow_1);
  border-left: 8px solid;
  border-radius: 8px;
  width: max-content;
  transition: all 500ms ease-out;
  opacity: 0;
  pointer-events: none;
  left: -100rem;
  bottom: 14.4rem;

  &.show {
    opacity: 1;
    pointer-events: all;
    left: 2.4rem;
  }

  .icon {
    &.indicator {
      height: 20px;
    }

    &.close {
      height: 8px;
    }
  }

  &.info {
    border-color: var(--primary_main);
  }

  &.success {
    border-color: var(--success);
  }

  &.error {
    border-color: var(--danger);
  }

  &.warning {
    border-color: var(--warning);
  }
`;

export default AlertWrapper;
