// Packages
import { Grid, Title } from "@lib"

// Containers
import ButtonPlayground from "../../../container/playgrounds/Button"

export default function ButtonDocumentation() {
	return (
		<Grid container>
			<Title>Button component</Title>

			<ButtonPlayground />

			<p>Buttons are the main way to interact with your application, they serve as a click handlers, link anchors and form submissions. </p>
		</Grid>
	)
}