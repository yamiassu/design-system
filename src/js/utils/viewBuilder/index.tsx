// Packages
import { h, Fragment } from "preact"
import { Grid, Title } from "@lib"

// Component
import Props from "./props"

export default function viewBuilder(props: Props) {
	return (
		<>
			<Grid container>
				<Title>{props.name} Component</Title>
			</Grid>

			{props.playground}

			<Grid container>
				{props.description}
			</Grid>
		</>
	)
}