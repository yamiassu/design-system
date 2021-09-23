// Packages
import { Theme } from "@lib"
import { BrowserRouter, Switch, Route, Link } from "react-router-dom"

// Playgrounds
import GridDocumentation from "../../../views/components/Grid"
import ButtonDocumentation from "../../../views/components/Button"
import TooltipDocumentation from "../../../views/components/Tooltip"
import TitleDocumentation from "../../../views/components/Title"
import InputDocumentation from "../../../views/components/Input"

export function App() {
	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<Theme>
			<BrowserRouter>
				<Link to="/components/grid">Grid</Link>
				<Link to="/components/Title">Title</Link>
				<Link to="/components/Input">Input</Link>
				<Link to="/components/button">Button</Link>
				<Link to="/components/tooltip">Tooltip</Link>
				<Switch>
					<Route path="/components/input">
						<InputDocumentation />
					</Route>
					<Route path="/components/title">
						<TitleDocumentation />
					</Route>
					<Route path="/components/grid">
						<GridDocumentation />
					</Route>
					<Route path="/components/button">
						<ButtonDocumentation />
					</Route>
					<Route path="/components/tooltip">
						<TooltipDocumentation />
					</Route>
				</Switch>
			</BrowserRouter>
		</Theme>
	)
}
