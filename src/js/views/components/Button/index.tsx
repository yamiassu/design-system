// Packages
import { Grid, Title } from "@lib"
import { Link } from "react-router-dom"

// Containers
import ButtonPlayground from "../../../container/playgrounds/Button"

export default function ButtonDocumentation() {
	return (
		<>
			<Grid container>
				<Title>Button component</Title>
			</Grid>

			<ButtonPlayground />

			<Grid container>
				<p>
					Buttons are the main way to interact with your application, they serve as a click handlers, link anchors and form submissions.
					All automatically built based on the props you pass to the component.
				</p>

				<Title size="3">Colors</Title>

				<p>Colors are based on the <Link to="/design/colors">desygn system</Link> default</p>
			</Grid>
		</>
	)
}