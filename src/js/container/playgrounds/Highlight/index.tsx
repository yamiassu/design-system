// Packages
import { h } from "preact"
import { Highlight } from "@lib"
import { Playground } from "@lib"

// Component
import playgroundProps from "./playgroundProps"
import playGroundDefaultProps from "./defaultProps"

export default function HighlightPlayground() {
	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<Playground
			minimal
			component={Highlight}
			props={playgroundProps}
			defaultProps={playGroundDefaultProps}
		/>
	)
}