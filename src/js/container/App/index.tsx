import { Grid, ThemeProvider } from "@lib"

export function App() {
	return (
		<ThemeProvider>
			<Grid direction="row">
				<Grid col="2" background="danger">hi</Grid>
				<Grid col="fill" background="warning">hi</Grid>
			</Grid>
		</ThemeProvider>
	)
}
