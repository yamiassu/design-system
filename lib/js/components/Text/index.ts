// Theme
import { styled } from "../../../theme"

// Utils
import { colors } from "../../utils/color"
import { textSize } from "../../utils/typography"
import { padding, margin } from "../../utils/layout"

const Text = styled("p", {
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

export default Text