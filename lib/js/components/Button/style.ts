// Theme
import { css } from "../../../theme"

// Utils
import { getColors, getBackgrounds } from "../../utils/color"

export const buttonCss = css({
	// default styling
	borderRadius: "$radius",
	border: "transparent",
	padding: "$padding calc($padding * 2)",
	transition: "box-shadow .2s ease",
	fontWeight: "bold",

	"& + button": {
		marginLeft: "$margin",
	},

	"&:hover": {
		cursor: "pointer",
		boxShadow: "0 0 4px 1px $colors$dark",
	},

	variants: {
		/**
		 * Font color
		 */
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