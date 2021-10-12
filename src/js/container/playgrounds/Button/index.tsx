// Packages
import { h } from "preact"
import { Button, Playground } from "@lib"

// Component
import playgroundProps from "./playgroundProps"
import playGroundDefaultProps from "./defaultProps"

export default function ButtonPlayground() {
	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<Playground
			minimal
			component={Button}
			props={playgroundProps}
			defaultProps={playGroundDefaultProps}
		/>
	)
}