// Theme
import { css } from "../../../theme"

// Utils
import { bgColors } from "../../utils/color"
import { textSize } from "../../utils/typography"

export const buttonCss = css({
	// default styling
	borderRadius: "$radius",
	border: "transparent",
	padding: "$padding calc($padding * 2)",
	transition: "box-shadow .2s ease",
	fontWeight: "bold",
	overflow: "hidden",

	"& + button": {
		marginLeft: "$margin",
	},

	variants: {
		icon: {
			true: {
				fontWeight: "bold",
				padding: 0,
				borderRadius: "50%",
			},
		},
		color: bgColors,
		disabled: {
			true: {
				opacity: 0.7,
				"&:hover": {
					cursor: "default",
				},
			},
			false: {},
		},
		hover: {
			true: {},
		},
		size: textSize,
	},

	compoundVariants: [
		{
			disabled: false,
			hover: true,
			css: {
				"&:hover": {
					cursor: "pointer",
					boxShadow: "0 0 4px 1px $colors$dark",
				},
			},
		},
		{
			icon: true,
			size: "sm",
			css: {
				width: "20px",
				height: "20px",
			},
		},
		{
			icon: true,
			size: "md",
			css: {
				width: "30px",
				height: "30px",
			},
		},
		{
			icon: true,
			size: "lg",
			css: {
				width: "40px",
				height: "40px",
			},
		},
	],

	defaultVariants: {
		color: "primary",
		hover: true,
		disabled: false,
	},
})