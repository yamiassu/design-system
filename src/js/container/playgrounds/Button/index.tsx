// Packages
import { Button } from "@lib"

// Components
import Playground from "../../../components/Playground"

// Component
import playgroundProps from "./playgroundProps"
import buttonPlayGroundDefaultProps from "./defaultProps"

export default function ButtonPlayground() {
	return (
		<Playground
			component={Button}
			props={playgroundProps}
			defaultProps={buttonPlayGroundDefaultProps}
		/>
	)
}