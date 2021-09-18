import { Grid, Button, ThemeProvider, Title, Input } from "@lib"

export function App() {
	return (
		<ThemeProvider>
			<Grid container>
				<Title>Yamiassu</Title>
				<Grid>
					<Input label="Your name" name="test" placeholder="ex: John Doe" />
					<Input label="Your email" name="test" placeholder="john.doe@email.com" />
					<Button>Update</Button>
					<Button background="danger">Delete</Button>
				</Grid>
			</Grid>
		</ThemeProvider>
	)
}
