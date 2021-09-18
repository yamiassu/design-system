// Theme
import { css } from "../../../theme"

// Utils
import { getColors, getBackgrounds } from "../../utils/color"

export const buttonCss = css({
	// default styling
	borderRadius: "$radius",
	border: "transparent",
	padding: "calc($padding / 2) $padding",

	"& + button": {
		marginLeft: "$margin",
	},

	variants: {
		color: getColors(),
		background: getBackgrounds(),
		disabled: {
			true: {
				opacity: 0.7,
			},
		},
	},

	defaultVariants: {
		color: "light",
		background: "primary",
	},
})