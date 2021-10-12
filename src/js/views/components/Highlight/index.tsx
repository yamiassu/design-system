// Packages
import { h, Fragment } from "preact"
import { Title } from "@lib"

// Containers
import Playground from "../../../container/playgrounds/Highlight"

// Utils
import viewBuilder from "../../../utils/viewBuilder"

export default function HighlightDocumentation() {
	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return viewBuilder({
		name: "Highlight",
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