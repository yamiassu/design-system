// Theme
import { css } from "../../../theme"

// Utils
import { colors, bgColors, borderColors } from "../../utils/color"

export const selectCss = css({
	// default styling
	borderRadius: "$radius",
	border: "$sizes$borderWidth solid transparent",
	padding: "calc($padding / 2) $padding",
	backgroundColor: "$references$background",
	marginTop: "$margin",
	appearance: "button",
	userSelect: "none",

	"> option": {
		color: "$references$color",
		background: "$references$background",
	},

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