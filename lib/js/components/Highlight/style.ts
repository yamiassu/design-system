import { css } from "../../../theme"

export const highlightCss = css({
	color: "#92CB0D",

	"[class*=comment]": {
		color: "#998",
	},
	"[class*=keyword]": {
		color: "#fff",
	},
	"[class*=string]": {
		color: "#d14",
	},
	"[class*=meta]": {
		color: "#999",
		fontWeight: "bold",
	},
	"[class*=built_in]": {
		color: "#0086b3",
	},
})

export const containerCss = css({
	width: "100%",
	backgroundColor: "#2b1140",
	padding: "20px 18px",
	borderRadius: "4px",
	position: "relative",
})

export const nameCss = css({
	fontSize: "0.8em",
	position: "absolute",
	top: 10,
	left: 10,
})