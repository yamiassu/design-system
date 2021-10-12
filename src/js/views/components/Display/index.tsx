// Packages
import { h, Fragment } from "preact"
import { Title } from "@lib"

// Containers
import Playground from "../../../container/playgrounds/Display"

// Utils
import viewBuilder from "../../../utils/viewBuilder"

export default function DisplayDocumentation() {
	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return viewBuilder({
		name: "Display",
		playground: <Playground />,
		description: (
			<>
				<p>
					Display
				</p>

				<Title size="3">Colors</Title>
			</>
		),
	})
}