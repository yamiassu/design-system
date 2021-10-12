// Theme
import { css } from "../../../theme"

// -------------------------------------------------
// Container
// -------------------------------------------------

export const containerCss = css({
	position: "relative",
	padding: "$padding",
	display: "inline-block",
	fontWeight: "bold",

	"& span": {
		display: "flex",
		alignItems: "center",
	},

	"& svg": {
		boxSizing: "content-box",
		paddingLeft: "$padding",
		height: 12,
		width: 12,
	},

	"&:hover": {
		cursor: "pointer",
	},
})

// -------------------------------------------------
// Item
// -------------------------------------------------

export const itemCss = css({
	marginTop: "$margin",
	width: "100%",
	textDecoration: "none",
	backgroundColor: "transparent",
	border: "transparent",
})

// -------------------------------------------------
// Drop
// -------------------------------------------------

export const dropCss = css({
	position: "absolute",
	padding: "$padding",
	display: "flex",
	flexDirection: "column",
	background: "$references$background",
	width: "100%",
	left: 0,
	transition: "opacity .2s ease",

	variants: {
		inline: {
			true: {
				position: "relative",
			},
		},
		open: {
			true: {
				opacity: 1,
			},
			false: {
				opacity: 0,
				display: "none",
			},
		},
	},

	defaultVariants: {
		open: false,
	},
})