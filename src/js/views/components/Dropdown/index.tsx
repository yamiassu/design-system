// Packages
import { h, Fragment } from "preact"
import { Title } from "@lib"

// Containers
import Playground from "../../../container/playgrounds/Dropdown"

// Utils
import viewBuilder from "../../../utils/viewBuilder"

export default function DropdownDocumentation() {
	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return viewBuilder({
		name: "Dropdown",
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