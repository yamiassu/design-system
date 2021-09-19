// Packages
import { ThemeProvider } from "@lib"

// Playgrounds
import ButtonDocumentation from "../../../views/components/Button"

export function App() {
	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<ThemeProvider>
			<ButtonDocumentation />
		</ThemeProvider>
	)
}
