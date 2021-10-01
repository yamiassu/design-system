// Packages
import { Input, Playground } from "@lib"

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