// Packages
import { Button, Playground } from "@lib"

// Component
import playgroundProps from "./playgroundProps"
import buttonPlayGroundDefaultProps from "./defaultProps"

export default function ButtonPlayground() {
	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<Playground
			minimal
			component={Button}
			props={playgroundProps}
			defaultProps={buttonPlayGroundDefaultProps}
		/>
	)
}