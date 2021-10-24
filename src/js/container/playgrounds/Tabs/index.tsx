// Packages
import { h } from "preact"
import { Tabs } from "@lib"
import { Playground } from "@lib"

// Component
import playgroundProps from "./playgroundProps"
import playGroundDefaultProps from "./defaultProps"

export default function TabsPlayground() {
	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<Playground
			minimal
			component={Tabs}
			props={playgroundProps}
			defaultProps={playGroundDefaultProps}
		/>
	)
}