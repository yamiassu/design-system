// Packages
import { Tooltip } from "@lib"

// Components
import Playground from "../../../components/Playground"

// Component
import playgroundProps from "./playgroundProps"
import playGroundDefaultProps from "./defaultProps"

export default function TooltipPlayground() {
	return (
		<Playground
			minimal
			component={Tooltip}
			props={playgroundProps}
			defaultProps={playGroundDefaultProps}
		/>
	)
}