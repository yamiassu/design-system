// Theme
import { css } from "../../../theme"

// Utils
import { colors, bgColors, borderColors } from "../../utils/color"

export const inputCss = css({
	// default styling
	borderRadius: "$radius",
	border: "$sizes$borderWidth solid transparent",
	padding: "calc($padding / 2) $padding",
	backgroundColor: "transparent",
	marginTop: "$margin",
	resize: "vertical",

	variants: {
		color: colors,
		background: bgColors,
		border: borderColors,
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