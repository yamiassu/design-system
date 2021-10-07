// Packages
import { h, Fragment } from "preact"
import { Title } from "@lib"

// Containers
import Playground from "../../../container/playgrounds/Title"

// Utils
import viewBuilder from "../../../utils/viewBuilder"

export default function TitleDocumentation() {
	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return viewBuilder({
		name: "Title",
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