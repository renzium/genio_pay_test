import ButtonWrapper from "./ButtonWrapper";

interface Props {
  icon?: string;
  endIcon?: string;
  text: string;
  [x: string]: unknown; // for the rest of the HTML button props (e.g disabled, type, onClick)
}

const Button = (props: Props): JSX.Element => {
  const { icon, endIcon, text, disabled } = props;

  return (
    <ButtonWrapper {...props}>
      {icon && !disabled && <img src={icon} alt="icon" className="icon" />}
      <span>{text}</span>
      {endIcon && <img src={endIcon} alt="endIcon" className="endIcon" />}
    </ButtonWrapper>
  );
};

export default Button;
