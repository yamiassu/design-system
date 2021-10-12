// Packages
import { h } from "preact"
import { Playground } from "@lib"
import { Display } from "@lib"

// Component
import playgroundProps from "./playgroundProps"
import playGroundDefaultProps from "./defaultProps"

export default function DisplayPlayground() {
	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<Playground
			minimal
			component={Display}
			props={playgroundProps}
			defaultProps={playGroundDefaultProps}
		/>
	)
}