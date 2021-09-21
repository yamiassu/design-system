// Packages
import { Grid, Title } from "@lib"

// Containers
import TooltipPlayground from "../../../container/playgrounds/Tooltip"

export default function TooltipDocumentation() {
	return (
		<Grid container>
			<Title>Tooltip component</Title>

			<TooltipPlayground />

			<p>Tooltip is a small popup that hovers around a certain object to display indepth information about a subject.</p>
		</Grid>
	)
}