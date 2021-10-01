// Packages
import { Grid, Title } from "@lib"

// Containers
import InputPlayground from "../../../container/playgrounds/Input"

export default function InputDocumentation() {
	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<>
			<Grid container>
				<Title>Input component</Title>
			</Grid>

			<InputPlayground />
			<Grid container>

				<p>
					Grid
				</p>

				<Title size="3">Colors</Title>
			</Grid>
		</>
	)
}