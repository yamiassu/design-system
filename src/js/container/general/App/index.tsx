// Packages
import { h } from "preact"
import { Button, Dropdown, Grid, Theme } from "@lib"
import { BrowserRouter, Switch, Route } from "react-router-dom"

// Playgrounds
import GridDocumentation from "../../../views/components/Grid"
import TabsDocumentation from "../../../views/components/Tabs"
import TextDocumentation from "../../../views/components/Text"
import TitleDocumentation from "../../../views/components/Title"
import InputDocumentation from "../../../views/components/Input"
import ButtonDocumentation from "../../../views/components/Button"
import DisplayDocumentation from "../../../views/components/Display"
import TooltipDocumentation from "../../../views/components/Tooltip"
import DropdownDocumentation from "../../../views/components/Dropdown"
import HighlightDocumentation from "../../../views/components/Highlight"

// Img
import logoImg from "../../../../img/logo.svg"

// Views
import Home from "../../../views/general/Home"
import NotFound from "../../../views/general/NotFound"

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
						<Dropdown.Item to="/components/input">Input</Dropdown.Item>
						<Dropdown.Item to="/components/text">Text</Dropdown.Item>
						<Dropdown.Item to="/components/button">Button</Dropdown.Item>
						<Dropdown.Item to="/components/tooltip">Tooltip</Dropdown.Item>
						<Dropdown.Item to="/components/display">Display</Dropdown.Item>
						<Dropdown.Item to="/components/highlight">Highlight</Dropdown.Item>
						<Dropdown.Item to="/components/tabs">Tabs</Dropdown.Item>
					</Dropdown>
				</Grid>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/components/dropdown">
						<DropdownDocumentation />
					</Route>
					<Route exact path="/components/input">
						<InputDocumentation />
					</Route>
					<Route exact path="/components/text">
						<TextDocumentation />
					</Route>
					<Route exact path="/components/title">
						<TitleDocumentation />
					</Route>
					<Route exact path="/components/grid">
						<GridDocumentation />
					</Route>
					<Route exact path="/components/button">
						<ButtonDocumentation />
					</Route>
					<Route exact path="/components/tooltip">
						<TooltipDocumentation />
					</Route>
					<Route exact path="/components/display">
						<DisplayDocumentation />
					</Route>
					<Route exact path="/components/highlight">
						<HighlightDocumentation />
					</Route>
					<Route exact path="/components/tabs">
						<TabsDocumentation />
					</Route>
					<Route>
						<NotFound />
					</Route>
				</Switch>
			</BrowserRouter>
		</Theme>
	)
}
