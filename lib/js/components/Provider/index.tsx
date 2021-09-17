// Component
import Props from "./props"

// Theme
import globalStyles from "../../../theme/globals"

export default function Provider(props: Props) {
	globalStyles()

	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<>{props.children}</>
	)
}