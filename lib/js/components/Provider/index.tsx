// Component
import Props from "./props"

// Theme
import { createTheme } from "../../../theme"
import globalStyles from "../../../theme/globals"

export default function Provider(props: Props) {
	globalStyles()

	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<div class={props.theme && createTheme(props.theme)}>{props.children}</div>
	)
}