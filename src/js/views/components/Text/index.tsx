// Packages
import { h, Fragment } from "preact"
import { Title } from "@lib"

// Containers
import Playground from "../../../container/playgrounds/Text"

// Utils
import viewBuilder from "../../../utils/viewBuilder"

export default function TextDocumentation() {
	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return viewBuilder({
		name: "Input",
		playground: <Playground />,
		description: (
			<>
				<p>
					Text
				</p>

				<Title size="3">Colors</Title>
			</>
		),
	})
}