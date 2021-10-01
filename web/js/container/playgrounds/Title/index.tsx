// Packages
import { Title, Playground } from "@lib"

// Component
import playgroundProps from "./playgroundProps"
import playGroundDefaultProps from "./defaultProps"

export default function TitlePlayground() {
	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<Playground
			minimal
			component={Title}
			props={playgroundProps}
			defaultProps={playGroundDefaultProps}
		/>
	)
}