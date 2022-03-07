import FeatherIcon from "../icon/FeatherIcon";
import Spacer from "../spacer/Spacer";
import AlertWrapper from "./AlertWrapper";

interface Props {
  alertDetails: {
    msg: string;
    type: "info" | "success" | "error" | "warning";
  };
}

const iconDetails = {
  info: {
    iconName: "info",
    color: "#032CA6",
  },
  success: {
    iconName: "check",
    color: "#219653",
  },
  error: {
    iconName: "alert-triangle",
    color: "#BE0E0F",
  },
  warning: {
    iconName: "alert-octagon",
    color: "#F3BB1C",
  },
};

const Alert = (props: Props): JSX.Element => {
  const { alertDetails } = props;

  return (
    <AlertWrapper className={alertDetails?.type ?? ""}>
      <Spacer x={2.4} />
      <FeatherIcon
        iconName={iconDetails[alertDetails.type]?.iconName}
        color={iconDetails[alertDetails.type]?.color}
      />
      <Spacer x={2.4} />
      <span>{alertDetails?.type}</span>
      <Spacer x={2.4} />
      <FeatherIcon iconName="x" />
    </AlertWrapper>
  );
};

export default Alert;
