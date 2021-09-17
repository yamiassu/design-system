// Packages
import { createStitches } from "@stitches/react"

const theme = createStitches({
	// -------------------------------------------------
	// Color
	// -------------------------------------------------

	theme: {
		colors: {
			primary: "#8033bc",
			secondary: "#92cb0d",
			dark: "",
			light: "",
			warning: "",
			danger: "",
			success: "",
		},
	},

	// -------------------------------------------------
	// Responsivity
	// -------------------------------------------------

	media: {
		xs: "(max-width: 576px)",
		sm: "(min-width: 576px) and (max-width: 768px)",
		md: "(min-width: 768px) and (max-width: 992px)",
		lg: "(min-width: 992px) and (max-width: 1200px)",
		xl: "(min-width: 1200px) and (max-width: 1400px)",
		xxl: "(min-width: 1400px)",
	},
})

export const globalCss = theme.globalCss
export const styled = theme.styled
export default theme