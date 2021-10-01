// Packages
import { Dropdown, Playground } from "@lib"

// Component
import playgroundProps from "./playgroundProps"
import playGroundDefaultProps from "./defaultProps"
import { StaticRouter } from "react-router-dom"

export default function DropdownPlayground() {
	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<Playground
			minimal
			component={(props) => <StaticRouter><Dropdown {...props} /></StaticRouter>}
			props={playgroundProps}
			defaultProps={playGroundDefaultProps}
		/>
	)
}