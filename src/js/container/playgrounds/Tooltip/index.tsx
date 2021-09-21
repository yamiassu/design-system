// Packages
import { Tooltip } from "@lib"

// Components
import Playground from "../../../components/Playground"

// Component
import playgroundProps from "./playgroundProps"
import buttonPlayGroundDefaultProps from "./defaultProps"

export default function TooltipPlayground() {
	return (
		<Playground
			minimal
			component={Tooltip}
			props={playgroundProps}
			defaultProps={buttonPlayGroundDefaultProps}
		/>
	)
}