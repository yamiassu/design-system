// Packages
import { h, Fragment } from "preact"
import { Title } from "@lib"

// Containers
import Playground from "../../../container/playgrounds/Tabs"

// Utils
import viewBuilder from "../../../utils/viewBuilder"

export default function TabsDocumentation() {
	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return viewBuilder({
		name: "Tabs",
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