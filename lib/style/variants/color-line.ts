// Theme
import { css } from "../../theme"

// Utils
import { borderColors } from "../../js/utils/color"

const colorLineVariant = css({
	border: "2px solid",

	variants: {
		line: borderColors,
	},
})

export default colorLineVariant