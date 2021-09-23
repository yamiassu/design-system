// Packages
import { Grid, Title } from "@lib"

// Containers
import TitlePlayground from "../../../container/playgrounds/Title"

export default function TitleDocumentation() {
	return (
		<>
			<Grid container>
				<Title>Title component</Title>
			</Grid>

			<TitlePlayground />
			<Grid container>

				<p>
					Grid
				</p>

				<Title size="3">Colors</Title>
			</Grid>
		</>
	)
}