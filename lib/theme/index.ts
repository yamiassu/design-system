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
			dark: "#121313",
			light: "#f9f9f9",
			warning: "#f6e83e",
			danger: "#cc2524",
			success: "#698e08",
		},

		sizes: {
			containerXS: "100%",
			containerSM: "540px",
			containerMD: "720px",
			containerLG: "960px",
			containerXL: "1140px",
			containerXXL: "1320px",
		},

		space: {
			margin: "12px",
			padding: "12px",
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

export const createTheme = theme.createTheme
export const globalCss = theme.globalCss
export const styled = theme.styled
export default theme