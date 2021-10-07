// Packages
import { h, Fragment } from "preact"
import { Title } from "@lib"

// Containers
import Playground from "../../../container/playgrounds/Grid"

// Utils
import viewBuilder from "../../../utils/viewBuilder"

export default function GridDocumentation() {
	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return viewBuilder({
		name: "Grid",
		playground: <Playground />,
		description: (
			<>
				<p>
					Grid
				</p>

				<Title size="3">Colors</Title>
			</>
		),
	})
}