import { Grid, ThemeProvider } from "@lib"

export function App() {
	return (
		<ThemeProvider>
			<Grid container>
				<div style={{ backgroundColor: "red" }}>1</div>
				<div style={{ backgroundColor: "green" }}>2</div>
				<div style={{ backgroundColor: "blue" }}>3</div>
			</Grid>
		</ThemeProvider>
	)
}
