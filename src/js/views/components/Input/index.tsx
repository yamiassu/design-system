// Packages
import { h, Fragment } from "preact"
import { Title } from "@lib"

// Containers
import Playground from "../../../container/playgrounds/Input"

// Utils
import viewBuilder from "../../../utils/viewBuilder"

export default function InputDocumentation() {
	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return viewBuilder({
		name: "Input",
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