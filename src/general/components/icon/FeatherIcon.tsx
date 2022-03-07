import feather from "feather-icons";

interface Props {
	iconName: string;
	className?: string;
	color?: string;
	strokeWidth?: number;
	[x: string]: unknown; // for the rest of the HTML tag props and others
}

function FeatherIcon(props: Props): JSX.Element {
	const { iconName, className, color, strokeWidth, ...other } = props;
	const svg = feather.icons[iconName].toSvg({
		class: className || "icon",
		"stroke-width": strokeWidth || 2,
		color: color || "#666666",
	});

	return (
		<span
			className="iconWrapper"
			{...other}
			dangerouslySetInnerHTML={{ __html: svg }}
		/>
	);
}

export default FeatherIcon;
