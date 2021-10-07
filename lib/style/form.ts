// Theme
import { css } from "../theme"

export const containerCss = css({
	// default styling
	width: "100%",
	display: "flex",
	flexDirection: "column",
	margin: "calc($margin * 2) 0 0",

	"& > :is(input,label)": {
		width: "100%",
	},
})