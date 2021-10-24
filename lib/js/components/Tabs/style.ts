// Theme
import { css } from "../../../theme"

// Utils
import { padding } from "./utils"

// -------------------------------------------------
// Container
// -------------------------------------------------

export const containerCss = css({
	background: "$dark",
	width: "100%",

	variants: {
		side: {
			true: {
				display: "flex",

				"& > div:first-child": {
					display: "flex",
					flexDirection: "column",
				},
			},
		},
		p: padding,
	},
})

// -------------------------------------------------
// Tabs button
// -------------------------------------------------

export const buttonCss = css({
	border: "transparent",
	background: "transparent",
	padding: "$padding",
	position: "relative",

	"&:hover": {
		cursor: "pointer",
	},

	"&:after": {
		content: "",
		height: 2,
		width: 0,
		backgroundColor: "$primary",
		position: "absolute",
		bottom: 8,
		left: "10%",
		transition: "width .2s ease",
	},

	variants: {
		active: {
			true: {
				"&:after": {
					width: "80%",
				},
			},
		},
	},
})