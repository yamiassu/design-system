// Packages
import { Input } from "@lib"

// Components
import Playground from "../../../components/Playground"

// Component
import playgroundProps from "./playgroundProps"
import playGroundDefaultProps from "./defaultProps"

export default function InputPlayground() {
	return (
		<Playground
			minimal
			component={Input}
			props={playgroundProps}
			defaultProps={playGroundDefaultProps}
		/>
	)
}