// Theme
import { css } from "../../../theme"

export const tooltipCss = css({
	opacity: 0,
	background: "$references$color",
	color: "$references$background",
	padding: "$padding",
	position: "absolute",
	overflowWrap: "break-word",
	pointerEvents: "none",
	transition: "opacity .2s ease",
	zIndex: 10,
	width: "max-content",

	"&:before": {
		content: "",
		border: "10px solid transparent",
		width: 0,
		height: 0,
		position: "absolute",
	},

	variants: {
		active: {
			true: {
				opacity: 1,
				pointerEvents: "all",
			},
		},
		position: {
			bottom: {
				top: "calc(100% + 15px)",
				left: "50%",
				transform: "translateX(-50%)",

				"&:before": {
					borderBottom: "10px solid $references$color",
					transform: "translateX(-50%)",
					left: "50%",
					top: -20,
				},
			},
			top: {
				bottom: "calc(100% + 15px)",
				left: "50%",
				transform: "translateX(-50%)",

				"&:before": {
					borderTop: "10px solid $references$color",
					transform: "translateX(-50%)",
					left: "50%",
					bottom: -20,
				},
			},
			left: {
				right: "calc(100% + 15px)",
				top: "50%",
				transform: "translateY(-50%)",

				"&:before": {
					borderLeft: "10px solid $references$color",
					transform: "translateY(-50%)",
					top: "50%",
					right: -20,
				},
			},
			right: {
				left: "calc(100% + 15px)",
				top: "50%",
				transform: "translateY(-50%)",

				"&:before": {
					borderRight: "10px solid $references$color",
					transform: "translateY(-50%)",
					top: "50%",
					left: -20,
				},
			},
			"top-left": {
				bottom: "calc(100% + 15px)",
				left: "0%",

				"&:before": {
					borderTop: "10px solid $references$color",
					left: "calc(5px)",
					bottom: -20,
				},
			},
			"bottom-left": {
				top: "calc(100% + 15px)",
				left: "0%",

				"&:before": {
					borderBottom: "10px solid $references$color",
					left: "calc(5px)",
					top: -20,
				},
			},
			"top-right": {
				bottom: "calc(100% + 15px)",
				right: "0%",

				"&:before": {
					borderTop: "10px solid $references$color",
					right: "calc(5px)",
					bottom: -20,
				},
			},
			"bottom-right": {
				top: "calc(100% + 15px)",
				right: "0%",

				"&:before": {
					borderBottom: "10px solid $references$color",
					right: "calc(5px)",
					top: -20,
				},
			},
		},
	},

	defaultVariants: {
		position: "bottom",
	},
})

export const containerCss = css({
	position: "relative",
	display: "inline-block",
})