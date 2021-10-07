// Packages
import { h } from "preact"
import { Tooltip, Playground } from "@lib"

// Component
import playgroundProps from "./playgroundProps"
import playGroundDefaultProps from "./defaultProps"

export default function TooltipPlayground() {
	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<Playground
			minimal
			component={Tooltip}
			props={playgroundProps}
			defaultProps={playGroundDefaultProps}
		/>
	)
}