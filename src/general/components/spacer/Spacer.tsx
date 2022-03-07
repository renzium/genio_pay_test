import styled from "styled-components";

interface Props {
  x?: number;
  y?: number;
  xMobile?: number;
  yMobile?: number;
}

const Spacer = styled.div<Props>`
  display: block;
  height: ${(props) => props.y ?? 0}rem;
  width: ${(props) => (props.x ? props.x + "rem" : "100%")};
  flex-shrink: 0;

  @media screen and (max-width: 768px) {
    height: ${(props) => props.yMobile ?? props.y ?? 0}rem;
    width: ${(props) =>
      props.xMobile
        ? props.xMobile + "rem"
        : props.x
        ? props.x + "rem"
        : "100%"};
  }
`;

export default Spacer;
