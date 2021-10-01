// Packages
import { Text, Playground } from "@lib"

// Component
import playgroundProps from "./playgroundProps"
import playGroundDefaultProps from "./defaultProps"

export default function TextPlayground() {
	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<Playground
			minimal
			component={Text}
			props={playgroundProps}
			defaultProps={playGroundDefaultProps}
		/>
	)
}