// Packages
import { Grid, Title } from "@lib"

// Containers
import TextPlayground from "../../../container/playgrounds/Text"

export default function TextDocumentation() {
	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<>
			<Grid container>
				<Title>Text component</Title>
			</Grid>

			<TextPlayground />
			<Grid container>

				<p>
					Grid
				</p>

				<Title size="3">Colors</Title>
			</Grid>
		</>
	)
}