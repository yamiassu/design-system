// Packages
import { h, Fragment } from "preact"
import { Title } from "@lib"
import { Link } from "react-router-dom"

// Containers
import Playground from "../../../container/playgrounds/Button"

// Utils
import viewBuilder from "../../../utils/viewBuilder"

export default function ButtonDocumentation() {
	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return viewBuilder({
		name: "Button",
		playground: <Playground />,
		description: (
			<>
				<p>
					Buttons are the main way to interact with your application, they serve as a click handlers, link anchors and form submissions.
					All automatically built based on the props you pass to the component.
				</p>

				<Title size="3">Colors</Title>

				<p>Colors are based on the <Link to="/design/colors">desygn system</Link> default</p>
			</>
		),
	})
}