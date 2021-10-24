// Theme
import { css } from "../../theme"

// Utils
import { margin } from "../../js/utils/layout"

const marginVariant = css({
	variants: {
		m: {
			...margin,
			"l-a": { marginLeft: "auto" },
			"r-a": { marginRight: "auto" },
			"a": { margin: "auto" },
		},
	},
})

export default marginVariant