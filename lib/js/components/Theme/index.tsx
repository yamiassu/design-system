// Component
import Props from "./props"

// Theme
import { createTheme } from "../../../theme"
import globalStyles from "../../../theme/globals"
import darkTheme from "../../../theme/variants/dark"

export default function Provider(props: Props) {
	globalStyles()

	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	const className = () => {
		if (!props.theme) return

		if (props.theme === "dark") return darkTheme
		if (props.theme === "default") return "lightTheme"
		if (typeof props.theme === "string") return props.theme

		return createTheme(props.theme)
	}

	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<div class={className()}>{props.children}</div>
	)
}