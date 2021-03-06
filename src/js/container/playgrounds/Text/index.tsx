// Packages
import { h } from "preact"
import { Text } from "@lib/form"
import { Playground } from "@lib"

// Component
import playgroundProps from "./playgroundProps"
import playGroundDefaultProps from "./defaultProps"

export default function InputPlayground() {
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