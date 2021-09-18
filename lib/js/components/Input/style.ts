// Theme
import { css } from "../../../theme"

// Utils
import { getColors, getBackgrounds, getBorders } from "../../utils/color"

export const inputCss = css({
	// default styling
	borderRadius: "$radius",
	border: "$sizes$borderWidth solid transparent",
	padding: "calc($padding / 2) $padding",
	margin: "$margin 0 calc($margin * 2)",

	variants: {
		color: getColors(),
		background: getBackgrounds(),
		border: getBorders(),
		disabled: {
			true: {
				opacity: 0.7,
			},
		},
	},

	defaultVariants: {
		border: "primary",
	},
})

export const containerCss = css({
	// default styling
	width: "100%",
	"& > :is(input,label)": {
		width: "100%",
	},
})