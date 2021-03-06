// Packages
import { h, Fragment } from "preact"
import { Title } from "@lib"

// Containers
import Playground from "../../../container/playgrounds/Tooltip"

// Utils
import viewBuilder from "../../../utils/viewBuilder"

export default function TooltipDocumentation() {
	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return viewBuilder({
		name: "Tooltip",
		playground: <Playground />,
		description: (
			<>
				<p>
					Tooltip is a small popup that hovers around a certain object to display indepth information about a subject.
					They can be configurated to change it's position and max size.
					And they do accept any content inside of it, not just strings.
				</p>

				<Title size="3">Colors</Title>

				<p>
					Different from other color schemas, tooltips require to be inverse from the default color.
					But when manually setting it in the component, the behaviour is the same as the others.
				</p>
			</>
		),
	})
}