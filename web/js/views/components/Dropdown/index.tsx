// Packages
import { Grid, Title } from "@lib"

// Containers
import DropdownPlayground from "../../../container/playgrounds/Dropdown"

export default function DropdownDocumentation() {
	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<>
			<Grid container>
				<Title>Dropdown component</Title>
			</Grid>

			<DropdownPlayground />
			<Grid container>

				<p>
					Grid
				</p>

				<Title size="3">Colors</Title>
			</Grid>
		</>
	)
}