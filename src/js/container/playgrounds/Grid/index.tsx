// Packages
import { Grid } from "@lib"

// Components
import Playground from "../../../components/Playground"

// Component
import playgroundProps from "./playgroundProps"
import playGroundDefaultProps from "./defaultProps"

export default function GridPlayground() {
	return (
		<Playground
			minimal
			component={Grid}
			props={playgroundProps}
			defaultProps={playGroundDefaultProps}
		/>
	)
}