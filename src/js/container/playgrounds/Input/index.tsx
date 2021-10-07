// Packages
import { h } from "preact"
import { Input } from "@lib/form"
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
			component={Input}
			props={playgroundProps}
			defaultProps={playGroundDefaultProps}
		/>
	)
}