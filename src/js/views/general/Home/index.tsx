// Packages
import { h } from "preact"
import { Display, Grid, Title } from "@lib"

export default function Home() {
	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<Grid container>
			<Title>Yamiassu's design system</Title>

			<Display data={{
				type: "paragraph",
				data: [
					"This line contains a",
					{
						type: "span",
						style: { fontWeight: "bold" },
						data: "bold text",
					},
					"and a ",
					{
						type: "span",
						style: { fontStyle: "italic" },
						data: "italic text",
					},
				]}} />
		</Grid>
	)
}