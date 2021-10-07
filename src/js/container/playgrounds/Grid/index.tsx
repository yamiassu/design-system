// Packages
import { h } from "preact"
import { Grid, Playground } from "@lib"

// Component
import playgroundProps from "./playgroundProps"
import playGroundDefaultProps from "./defaultProps"

export default function GridPlayground() {
	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<Playground
			minimal
			component={Grid}
			props={playgroundProps}
			defaultProps={playGroundDefaultProps}
		/>
	)
}