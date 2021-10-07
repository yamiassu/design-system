// Theme
import { css } from "../../../theme"

export const gridCss = css({
	$$bgColor: "rgba(255,255, 255, 0.2)",
	overflow: "hidden",
	backgroundSize: "25px 25px",
	backgroundImage: "linear-gradient(to right, $$bgColor 1px, transparent 1px), linear-gradient(to bottom, $$bgColor 1px, transparent 1px)",
})