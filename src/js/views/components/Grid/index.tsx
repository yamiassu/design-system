// Packages
import { Grid, Title } from "@lib"

// Containers
import GridPlayground from "../../../container/playgrounds/Grid"

export default function GridDocumentation() {
	return (
		<>
			<Grid container>
				<Title>Grid component</Title>
			</Grid>

			<GridPlayground />
			<Grid container>

				<p>
					Grid
				</p>

				<Title size="3">Colors</Title>
			</Grid>
		</>
	)
}