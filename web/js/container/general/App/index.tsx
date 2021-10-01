// Packages
import { Button, Dropdown, Grid, Theme } from "@lib"
import { BrowserRouter, Switch, Route } from "react-router-dom"

// Playgrounds
import GridDocumentation from "../../../views/components/Grid"
import TextDocumentation from "../../../views/components/Text"
import TitleDocumentation from "../../../views/components/Title"
import InputDocumentation from "../../../views/components/Input"
import ButtonDocumentation from "../../../views/components/Button"
import TooltipDocumentation from "../../../views/components/Tooltip"
import DropdownDocumentation from "../../../views/components/Dropdown"

// Img
import logoImg from "../../../../img/logo.svg"

export function App() {
	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<Theme>
			<BrowserRouter>
				<Grid container vertical="center">
					<img src={logoImg} style={{ width: "30px" }} />
					<Button to="/">Home</Button>
					<Dropdown label="Design">
						<Dropdown.Item to="/design/colors">Colors</Dropdown.Item>
					</Dropdown>
					<Dropdown label="Components">
						<Dropdown.Item to="/components/dropdown">Dropdown</Dropdown.Item>
						<Dropdown.Item to="/components/grid">Grid</Dropdown.Item>
						<Dropdown.Item to="/components/Title">Title</Dropdown.Item>
						<Dropdown.Item to="/components/Input">Input</Dropdown.Item>
						<Dropdown.Item to="/components/button">Button</Dropdown.Item>
						<Dropdown.Item to="/components/tooltip">Tooltip</Dropdown.Item>
						<Dropdown.Item to="/components/text">Text</Dropdown.Item>
					</Dropdown>
				</Grid>
				<Switch>
					<Route path="/components/dropdown">
						<DropdownDocumentation />
					</Route>
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
					<Route path="/components/text">
						<TextDocumentation />
					</Route>
				</Switch>
			</BrowserRouter>
		</Theme>
	)
}
