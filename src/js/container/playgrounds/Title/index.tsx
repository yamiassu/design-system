// Packages
import { Title } from "@lib"

// Components
import Playground from "../../../components/Playground"

// Component
import playgroundProps from "./playgroundProps"
import playGroundDefaultProps from "./defaultProps"

export default function TitlePlayground() {
	return (
		<Playground
			minimal
			component={Title}
			props={playgroundProps}
			defaultProps={playGroundDefaultProps}
		/>
	)
}