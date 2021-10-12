// Theme
import { css } from "../../../theme"

// Utils
import { colors } from "../../utils/color"
import { textSize } from "../../utils/typography"
import { padding, margin } from "../../utils/layout"

// -------------------------------------------------
// Component
// -------------------------------------------------

export const textCss = css({
	marginTop: "$margin",

	variants: {
		size: textSize,
		p: padding,
		m: margin,
		color: colors,
		inline: { true: { display:"inline-block" } },
	},

	defaultVariants: {
		size: "md",
	},
})