// Theme
import { styled } from "../../../theme"

// Utils
import { invertedTextSize } from "../../utils/typography"

// -------------------------------------------------
// Components
// -------------------------------------------------

const Title = styled("h1", {
	variants: {
		size: invertedTextSize,
	},

	defaultVariants: {
		size: "1",
	},
})

export default Title